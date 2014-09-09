app.controller('Dashboard', function Dashboard($scope, $http) {
  var API = "/v1/";
  $scope.slides = [];

  $scope.get_list = function() {
    $scope.serverImagesList = [];
    $http.get(API + 'slides').
      success(function(data, status, headers, config) {
        $scope.slides = data;
      }).
      error(function(data, status, headers, config) {
        console.log(data)
      });
  };

  $scope.get_list();
});
