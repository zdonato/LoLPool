lolpool.controller("AddChampionController", function ($scope, $uibModalInstance, role, $http) {

    $http.get("/champions")
        .success(function (response) {
            $scope.champions = Object.keys(response);
        })
        .error(function (err) {
            console.log(err);
        });
    console.log(role);

    $scope.role = role;

    $scope.save = function () {
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
    // Type-ahead stuff
});