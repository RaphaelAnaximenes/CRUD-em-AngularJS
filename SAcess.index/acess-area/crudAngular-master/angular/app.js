/**
 * Edited by Raphael Anaximenes on 14/06/2017.
 */

var crud = angular.module("crud", []);

crud.controller("controller", function ($scope) {

   $scope.novoCliente = {};
   $scope.clienteSelecionado = {};

   $scope.clientes = [
       {nome: "Cliente 1 Teste", telefone: 001, email: "um@gmail.com"},
       {nome: "Cliente 2 Teste", telefone: 002, email: "dois@gmail.com"},
       {nome: "Cliente 3 Teste", telefone: 003, email: "tres@gmail.com"},
   ];
   
   $scope.salvar = function () {
       $scope.clientes.push($scope.novoCliente);
       $scope.novoCliente = {};
   };
   
   $scope.selecionaCliente = function (cliente) {
        $scope.clienteSelecionado = cliente;
   };

   $scope.alterarCliente = function () {
       
   };

   $scope.excluirCliente = function(){
        $scope.clientes.splice($scope.clientes.indexOf($scope.clienteSelecionado), 1);
   };
   
});