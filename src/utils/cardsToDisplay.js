const cardsToDisplay = (page, cars) => {
  const cardsPerPage = 12;
  const endIndex = page * cardsPerPage;
  const displayedCars = cars.slice(0, endIndex);
  const isMoreToLoad = cars.length <= endIndex ? false : true;

 
  return { displayedCars, isMoreToLoad };
};

export default cardsToDisplay;
