const arrayOfNames = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index");

const getPeopleInCity = (arrayOfNames) => {
  return getFirstNames(arrayOfNames);
};

module.exports = getPeopleInCity;
