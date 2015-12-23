(function(){
    angular.module('angularSpa')
.controller('MainCtrl', function($scope){
	$scope.items = [
      'Bower',
      'Sass',
      'Gulp'
    ];
}).controller("Prueba",function($scope,$http){
$scope.Usuario={};

$scope.MetodoPost=function(){//login

//var Informacion= JSON.parse('{"username":"kmorales2","password":"jCayy5bcY4"}');

$http.post("http://pliskin12.ddns.net:8080/taller-bd-11/usuarios/login",{
	username: $scope.Usuario.nombre,
	password: $scope.Usuario.pass
})
.success(function(data, status, headers, config) {
		console.log(data);
		})
		.error(function(data, status, headers, config) {
		console.log(data);
		});
}

$scope.MetodoRegistro=function(){//Registro

//var Informacion= JSON.parse('{"username":"kmorales2","password":"jCayy5bcY4"}');

$http.post("http://pliskin12.ddns.net:8080/taller-bd-11/usuarios/registro",{
  nombreUsuario: $scope.Usuario.nombre,
  apellidoUsuario: $scope.Usuario.apellido,
  nickname: $scope.Usuario.nick,
  password: $scope.Usuario.pass,
  email: $scope.Usuario.mail,
  status: 1,
  validacion: 1,
  curador : 1

})
.success(function(data, status, headers, config) {
    console.log(data);
    })
    .error(function(data, status, headers, config) {
    console.log(data);
    });
}

$scope.GetReporte=function(){
$http.get("http:/ /pliskin12.ddns.net:8080/taller-bd-11/usuarios/10/reportes")
.success(function(data, status, headers, config) {
    console.log(data);
    })
    .error(function(data, status, headers, config) {
    console.log(data);
    });
}

$scope.PostReporte=function(){
$http.post("http:/ /pliskin12.ddns.net:8080/taller-bd-11/usuarios/10/reportes",{
contenido: "JP REPORTANDO3",
fecha: "2015-12-19",
foto: "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
geo: "lacinia sapien quis libero nullam sit amet turpis elementum ligula",
idFacultad: 101,
idUsuario: 10,
solucionado: 0,
validado: 0,
visible: 1
}{

headers:{ "auth_token": ""}

})
.success(function(data, status, headers, config) {
    console.log(data);
    })
    .error(function(data, status, headers, config) {
    console.log(data);
    });
}






});


})();
