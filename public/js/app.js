var lolpool = angular.module("lolpool", ['ui.bootstrap']);

lolpool.config(function ($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
});
