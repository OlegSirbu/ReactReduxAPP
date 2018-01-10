import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import NewsPage from './components/news/NewsPage';
import NewsItemPage from './components/news/NewsItemPage';
import NotesPage from './components/notes/NotesPage';
import ManageNotesPage from './components/notes/ManageNotesPage';
import FilmsPage from './components/films/FilmsPage';
import FilmsDetailPage from './components/films/FilmsDetailPage';
import CreateUserPage from './components/user/CreateUserPage';

export default (
    <Route path='/' component={App}>
        <IndexRoute component={NewsPage} />
        <Route path='news/:title'  component={NewsItemPage} />
        <Route path='notes' component={NotesPage} />
        <Route path='note' component={ManageNotesPage} />
        <Route path='note/:id/:page' component={ManageNotesPage} />
        <Route path='/films' component={FilmsPage} />
        <Route path='/film/:id' component={FilmsDetailPage} />
        <Route path='/newUser' component={CreateUserPage} />
    </Route>
);
