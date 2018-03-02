app.controller('lunch_checker', ['$scope', function($scope){
    $scope.totalValor = 0 ;
    $scope.items = "";

    $scope.itemCheck = function(){
        var message = "";
        var totalNameValue = caculateForString($scope.items);
        $scope.totalValor = totalNameValue;

        try{
            if($scope.totalValor == "") throw  $scope.message = "Please enter data first";
            if($scope.totalValor.length <= 3)  throw $scope.message = "Enjoy!";
            if($scope.totalValor.length > 3) throw $scope.message = "Too much!";
        }catch(err){
            console.log(err);
        }
    };

    function caculateForString(string){
        var  totalStringValor= 0;
        totalStringValor = string.split(',');
        return totalStringValor
       };

}]);


