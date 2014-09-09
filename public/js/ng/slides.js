app.controller('Slides', function Slides($scope, $http, $timeout) {
  $scope.slides = [];

  $scope.get_list = function() {
    $http.get(API + 'slides').
      success(function(data, status, headers, config) {
        $scope.slides = data;
      }).
      error(function(data, status, headers, config) {
        console.log(data)
      });
  };

  $timeout(function(){
    $scope.get_list();
  },150);
});
