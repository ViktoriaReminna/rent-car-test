import { createSelector } from '@reduxjs/toolkit';

export const selectCars = state => state.cars.cars;

export const selectFilter = state => state.filter.filter;

export const selectError = state => state.cars.error;

export const selectIsLoading = state => state.cars.isLoading;

export const selectFavoritesId = state => state.cars.favorites;

export const selectFavorites = createSelector(
  [selectCars, selectFavoritesId, selectFilter],
  (cars, ids, filter) => {
    const favCars = cars.filter(car => ids.includes(car.id));
    const favFiltredCars = filterCars(favCars, filter);
    const allFavCars = { favFiltredCars, favCars };
    return allFavCars;
  }
);
export const selectVisibleCars = createSelector(
  [selectCars, selectFilter],
  (cars, filter) => {
    const filtredCars = filterCars(cars, filter);
    return filtredCars;
  }
);
