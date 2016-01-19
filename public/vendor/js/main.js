angular.module('contatooh', ['ngRoute'])
.config(function($routeProvider) {
$routeProvider.when('/contatos', {
                templateUrl: 'partials/contatos.html',
                controller: 'ContatosController'})
                
                .when('app/public/contato/:contatoId', {
                templateUrl: 'partials/contato.html',
                controller: 'ContatoController'});
                
                $routeProvider.otherwise({redirectTo: '/contatos'});
});