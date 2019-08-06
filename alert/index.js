import angular from 'angular';

// Create the module where our functionality can attach to
let alertModule = angular.module('alert', []);

// Include our UI-Router config settings
import AlertConfig from './alert.config';
alertModule.config(HomeConfig);

// Controllers
import HomeCtrl from './alert.controller';
alertModule.controller('HomeCtrl', HomeCtrl);

export default alertModule;