import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import NewsPage from './components/news/NewsPage';
import NewsItemPage from './components/news/NewsItemPage';
import NotesPage from './components/notes/NotesPage';
import ManageNotesPage from './components/notes/ManageNotesPage';
import FinancePage from './components/finance/FinancePage';
import FinanceDetailPage from './components/finance/FinanceDetailPage';
import FilmsPage from './components/films/FilmsPage';
import FilmsDetailPage from './components/films/FilmsDetailPage';

export default (
    <Route path='/' component={App}>
        <IndexRoute component={NewsPage} />
        <Route path='news/:title'  component={NewsItemPage} />
        <Route path='notes' component={NotesPage} />
        <Route path='note/:id/:page' component={ManageNotesPage} />
        <Route path='/finance' component={FinancePage} />
        <Route path='/bank/:id' component={FinanceDetailPage} />
        <Route path='/films' component={FilmsPage} />
        <Route path='/film/:id' component={FilmsDetailPage} />
    </Route>
);
