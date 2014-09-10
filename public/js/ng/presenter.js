app.controller('Presenter', function Presenter($scope, $http, $timeout) {

  var init = function(){
    $scope.current = 0;
    $scope.slide = {};
    location.hash = "/";
  };

  $scope.get_slide = function(){
    $http.get(API + 'slide/' + $scope.current).
      success(function(data, status, headers, config) {
        if(data.length){
          $timeout(function(){
            $scope.slide = data[0];
          },100);
        }else{
          init();
        }
      }).
      error(function(data, status, headers, config) {
        console.log(data)
      });
  };

  var updateHash = function(){
    if($scope.current){
      location.hash = "#" + $scope.current + "";
      $scope.get_slide();
    }
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

  $scope.evalMyKey = function(event){
    console.log(event.keyCode);
    switch(event.keyCode){
      case 39:
        $scope.next();
        break;
      case 37:
        $scope.prev();
        break;
      default:
        break;
    }
  };

  init();
});
