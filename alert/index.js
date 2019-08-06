import angular from 'angular';

// Create the module where our functionality can attach to
let alertModule = angular.module('alert', []);

// Include our UI-Router config settings
import AlertConfig from './alert.config';
alertModule.config(AlertConfig);

// Controllers
import AlertCtrl from './alert.controller';
alertModule.controller('AlertCtrl', AlertCtrl);

export default alertModule;