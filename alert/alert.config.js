function AlertConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('alert', {
    url: '',
    controller: 'AlertCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'alert/alert.html'
  });

};

export default AlertConfig;