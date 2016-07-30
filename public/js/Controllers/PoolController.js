lolpool.controller("PoolController",
    function ($scope, $http, $uibModal, $document) {
        $http.get("/pool")
            .success(function (response) {
                console.log(response);
                $scope.pools = response;
            })
            .error(function (error){
                console.log(error);
            });

        $scope.add = function(poolRole) {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'public/partials/add-champion-modal.html',
                controller: 'AddChampionController',
                size: 'lg',
                resolve: {
                    role: function () {
                        return poolRole;
                    }
                },
                keyboard: true,
                appendTo: $document.find('add-modal')
            });
        };
    }
);
