import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import NewsPage from './components/news/NewsPage';
import NewsItemPage from './components/news/NewsItemPage';
import NotesPage from './components/notes/NotesPage';
import ManageNotesPage from './components/notes/ManageNotesPage';

export default (
    <Route path='/' component={App}>
        <IndexRoute component={NewsPage} />
        <Route path='news/:title'  component={NewsItemPage} />
        <Route path='notes' component={NotesPage} />
        <Route path='note' component={ManageNotesPage} />
        <Route path='note/:id' component={ManageNotesPage} />
    </Route>
);
