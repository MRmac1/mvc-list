import Backbone from 'backbone';
import AppView from './views/app-view';
import TodoRouter from './routers/router';

new TodoRouter();
Backbone.history.start();

new AppView();
