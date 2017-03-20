angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      /*.state('presentacion', {
    url: '/page1',
    templateUrl: 'templates/presentacion.html',
    controller: 'presentacionCtrl'
  })*/

  .state('login', {
    url: '/page2',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('restaurarContrasena', {
    url: '/page3',
    templateUrl: 'templates/restaurarContrasena.html',
    controller: 'restaurarContrasenaCtrl'
  })

  .state('registro', {
    url: '/page4',
    templateUrl: 'templates/registro.html',
    controller: 'registroCtrl'
  })

  .state('infoBicicleta', {
    url: '/page5',
    templateUrl: 'templates/infoBicicleta.html',
    controller: 'infoBicicletaCtrl'
  })

  .state('linkCambioContrasena', {
    url: '/www.bipoapp.com',
    templateUrl: 'templates/linkCambioContrasena.html',
    controller: 'linkCambioContrasenaCtrl'
  })

  .state('home', {
    url: '/Home',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('configuracion', {
    url: '/page9',
    templateUrl: 'templates/configuracion.html',
    controller: 'configuracionCtrl'
  })

  .state('bicicletaVista', {
    url: '/page10',
    templateUrl: 'templates/bicicletaVista.html',
    controller: 'bicicletaVistaCtrl'
  })

  .state('bicicletasReportadas', {
    url: '/page11',
    templateUrl: 'templates/bicicletasReportadas.html',
    controller: 'bicicletasReportadasCtrl'
  })

  .state('recuperadas', {
    url: '/page12',
    templateUrl: 'templates/recuperadas.html',
    controller: 'recuperadasCtrl'
  })

  .state('botonPanico', {
    url: '/page13',
    templateUrl: 'templates/botonPanico.html',
    controller: 'botonPanicoCtrl'
  })

  .state('zonasInseguras', {
    url: '/page14',
    templateUrl: 'templates/zonasInseguras.html',
    controller: 'zonasInsegurasCtrl'
  })

  .state('perfil', {
    url: '/page15',
    templateUrl: 'templates/perfil.html',
    controller: 'perfilCtrl'
  })

  .state('informacion', {
    url: '/page16',
    templateUrl: 'templates/informacion.html',
    controller: 'informacionCtrl'
  })

$urlRouterProvider.otherwise('/page2')

  

});