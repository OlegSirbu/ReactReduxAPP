import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import NotesPage from './components/notes/NotesPage';
import ManageNotesPage from './components/notes/ManageNotesPage';

export default (
    <Route path='/' component={App}>
        <IndexRoute component={HomePage} />
        <Route path='about' component={AboutPage} />
        <Route path='notes' component={NotesPage} />
        <Route path='note' component={ManageNotesPage} />
        <Route path='note/:id' component={ManageNotesPage} />
    </Route>
);
