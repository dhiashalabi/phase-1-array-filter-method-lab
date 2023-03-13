// Code your solution here

function findMatching(drivers, name) {
  return drivers.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, name) {
  return drivers.filter(function (driverName) {
    return driverName.startsWith(name);
  });
}

function matchName(drivers, name) {
  return drivers.filter(function (driver) {
    return driver.name === name;
  });
}
