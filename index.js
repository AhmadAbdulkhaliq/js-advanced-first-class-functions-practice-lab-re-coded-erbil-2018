// Code your solution in this file!
 const drivers = [
    { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
    { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
    { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
    { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
    { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
  ];
  
  let logDriverNames=function(array){
    return array.forEach(function(array){
      console.log(array.name);
    });
  };
  
  let logDriversByHometown=function(array , hometown){
    return array.forEach(function(array){
      if(array.hometown===hometown)
      console.log(array.name);
      
    });
  };

  
const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (first,second) {
    return first.revenue - second.revenue;
  });
};

const driversByName = function (drivers) {
  return drivers.slice().sort(function (one, two) {
    return driverOne.name.localeCompare(driverTwo.name);
  });
};

