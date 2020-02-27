angular.module('example.my_plugin').controller('MyPluginIndexController', function($scope, $http, pageTitle, gettext, notify) {
    pageTitle.set(gettext('MyPlugin'));

    $scope.counter = 0;

    $scope.click = () => {
            $scope.counter += 1;
            notify.info('+1');
        };

    // Bind a test var with the template.
    $scope.my_title = gettext('MyPlugin');
    
    // GET a result through Python API
    $http.get('/api/my_plugin').then( (resp) => {
	    $scope.python_get = resp.data;
    });

    // POST a result through Python API
    $http.post('/api/my_plugin', {my_var: 'my_plugin'}).then( (resp) => {
	    $scope.python_post = resp.data;
    });

});

