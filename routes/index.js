const noteRoutes = require('./note_routes');
const financeRoutes = require('./finance_routes');
const newsRoutes = require('./news_routes');

module.exports = function(app, db) {
  noteRoutes(app, db);
  financeRoutes(app);
  newsRoutes(app);
};
