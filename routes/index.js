const phonesRoutes = require('./phones.json');
const filtersRoutes = require('./filters.json');

module.exports = function() {
  return {
    phones : phonesRoutes,
    filters : filtersRoutes,
  };
};
