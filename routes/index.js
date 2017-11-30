const noteRoutes = require('./note_routes');
const financeRoutes = require('./finance_routes');
const newsRoutes = require('./news_routes');
const filmsRoutes = require('./films_routes');
const Routers = [financeRoutes, newsRoutes, filmsRoutes];

module.exports = function(app, db) {
  if(db) Routers.push(noteRoutes);
  Routers.map((route)=>route(app, db));
};
