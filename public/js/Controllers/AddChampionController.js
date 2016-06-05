lolpool.controller("AddChampionController", function ($scope, $uibModalInstance, role) {

    console.log(role);

    $scope.role = role;

    $scope.ok = function () {
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});