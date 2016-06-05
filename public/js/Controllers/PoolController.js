lolpool.controller("PoolController",
    function ($scope, $http, $uibModal, $document) {
        $http.get("/pool/1")
            .success(function (response) {
                console.log(response);
                $scope.pools = response;
            })
            .error(function (error){
                console.log(error);
            });
        
        $scope.animationsEnabled = true;

        $scope.add = function(poolRole) {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'public/partials/add-champion-modal.html',
                controller: 'AddChampionController',
                size: 'lg',
                resolve: {
                    role: function () {
                        return poolRole;
                    }
                },
                keyboard: true,
                appendTo: $document.find('#add-modal')[0]
            });
        };

        $scope.toggleAnimation = function () {
            $scope.animationsEnabled = !$scope.animationsEnabled;
        };
    }
);