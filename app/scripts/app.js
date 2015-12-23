(function(){

    angular.module('angularSpa', [
    'ngRoute'
    ])

    .config(function($routeProvider,$httpProvider)



    {
      
        //$httpProvider.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
        //delete $httpProvider.defaults.headers.common['X-Requested-With'];
       // $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        
        //$httpProvider.defaults.useXDomain = true;
        //delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $routeProvider
    
        .when('/home', {
            templateUrl: 'views/main.html',
            controller:'Prueba'


        
        
          })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
          })
        .otherwise({
            redirectTo: '/home'
          });
    });





})();
