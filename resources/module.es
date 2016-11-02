// the module should depend on 'core' to use the stock services & components
angular.module('example.my_plugin', [
    'core',
]);

angular.module('example.my_plugin').config(($routeProvider) => {
    $routeProvider.when('/view/my_plugin', {
        template: '<my-plugin></my-plugin>',
    });
});

angular.module('example.my_plugin').component('myPlugin', {
    templateUrl: '/my_plugin:resources/index.html',
    controller: function (notify, pageTitle) {
        let ctrl = this;

        pageTitle.set('My Plugin');

        ctrl.counter = 0;

        ctrl.click = () => {
            ctrl.counter += 1;
            notify.info('+1');
        };

        return this;
    }
});
