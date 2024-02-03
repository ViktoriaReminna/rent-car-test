import { useEffect } from 'react';
import { selectIsLoading, selectVisibleCars } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from 'redux/operations';
import { PageWrapper, Text } from './Cars.styled';
import CardsList from 'components/CardsList/CardsList';
import Filters from 'components/Filters/Filters';
import Loader from 'components/Loader/Loader';
import { resetFilter } from 'redux/filterSlice';

const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
    dispatch(resetFilter());
  }, [dispatch]);

  const cars = useSelector(selectVisibleCars);
  const isLoading = useSelector(selectIsLoading);

  return (
    <PageWrapper>
      <Filters />
      {isLoading ? (
        <Loader />
      ) : cars.length === 0 ? (
        <Text>No cars found matching your search criteria...</Text>
      ) : (
        <>
          <CardsList data={cars} />
        </>
      )}
    </PageWrapper>
  );
};

export default Catalog;
