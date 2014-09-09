app.controller('Resources', function Resources($scope, $http, $timeout) {
  $scope.resources = [];

  $scope.get_list = function() {
    $http.get(API + 'resources').
      success(function(data, status, headers, config) {
        $scope.resources = data;
      }).
      error(function(data, status, headers, config) {
        console.log(data)
      });
  };

  $timeout(function(){
    $scope.get_list();
  },100);
});
