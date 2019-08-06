import angular from 'angular';
import 'jquery';
import '@uirouter/angularjs';
import '@progress/kendo-ui';

// Import your app stylesheets
import './style.css';

// Import your app functionality
import './alert'

// Create and bootstrap application
const requires = [
  'kendo.directives',
  'ui.router',
  'alert',
];

window.app = angular.module('app', requires);

angular.bootstrap(document.getElementById('app'), ['app']);