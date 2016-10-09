lolpool.controller("AddChampionController", function ($scope, $uibModalInstance, role, $http) {

    $http.get("/champions/type-ahead-list")
        .success(function (response) {
            $scope.champions = response;
        })
        .error(function (err) {
            console.log(err);
        });

    $scope.onSelect = function ($item, model) {
        $scope[model] = $item;
    };

    $scope.role = role;

    $scope.save = function () {
        console.log("champ", $scope.selectedChampion);
        console.log("counters", $scope.selectedCounters);
        console.log("countered-by", $scope.selectedCounteredBy);

        var saveData = {
            champion: $scope.selectedChampion,
            counters: $scope.selectedCounters,
            counteredBy: $scope.selectedCounteredBy,
            role: $scope.role
        };

        $http.post("/pool", saveData)
            .success(function (response) {
                console.log(response);
            })
            .error(function (err) {
                console.log(err);
            });

        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});
