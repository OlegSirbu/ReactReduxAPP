const noteRoutes = require('./note_routes');
const financeRoutes = require('./finance_routes');
const newsRoutes = require('./news_routes');
const filmsRoutes = require('./films_routes');

const Routers = [noteRoutes, financeRoutes, newsRoutes, filmsRoutes];

module.exports = function(app, db) {
  Routers.map((route)=>{
    route(app, db)
  });
};
