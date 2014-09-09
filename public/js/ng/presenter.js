app.controller('Presenter', function Presenter($scope, $http, $timeout) {
  $scope.current = 0;
  $scope.slide = {};

  $scope.get_slide = function(){
    $http.get(API + 'slide/' + $scope.current).
      success(function(data, status, headers, config) {
        $scope.slide = data;
      }).
      error(function(data, status, headers, config) {
        console.log(data)
      });
  };

  var updateHash = function(){
    location.hash = "#" + $scope.current + "";
    $scope.get_slide();
  };

  $scope.prev = function(){
    $scope.current = $scope.current - 1;
    updateHash();
  };

  $scope.setCurrent = function(slide){
    $scope.current = slide.order;
    updateHash();
  };

  $scope.next = function(){
    $scope.current = $scope.current + 1;
    updateHash();
  };
});
