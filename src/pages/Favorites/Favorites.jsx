import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars } from '../../redux/operations';
import { selectFavorites, selectIsLoading } from '../../redux/selectors';
import { PageWrapper } from '../Cars/Cars.styled';
import CardsList from '../../components/CardsList/CardsList';
import InfoText from 'components/InfoText/InfoText';
import Filters from 'components/Filters/Filters';
import Loader from 'components/Loader/Loader';
import { resetFilter } from '../../redux/filterSlice';

const Favorites = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    dispatch(fetchCars());
    dispatch(resetFilter());
  }, [dispatch]);

  const { favCars, favFilteredCars } = useSelector(selectFavorites);

  return (
    <PageWrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {favCars.length === 0 ? (
            <InfoText
              text={"You haven't added any adverts to your favorites..."}
              btn
            />
          ) : (
            <>
              <Filters />
              <CardsList data={favFilteredCars} />
            </>
          )}
        </>
      )}
    </PageWrapper>
  );
};

export default Favorites;
