lolpool.controller("AddChampionController", function ($scope, $uibModalInstance, role) {

    console.log(role);

    $scope.role = role;

    $scope.save = function () {
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});