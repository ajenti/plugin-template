angular.module('example.my_plugin').config(($routeProvider) => {
    $routeProvider.when('/view/my_plugin', {
        templateUrl: '/my_plugin:resources/partial/index.html',
        controller: 'MyPluginIndexController',
    });
});
