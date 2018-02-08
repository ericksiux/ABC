var app = angular.module('Grid', ['datatables']);
app.controller('UserCtrl', ['$scope', '$http', 'DTOptionsBuilder', 'DTColumnBuilder',
    function ($scope, $http, DTOptionsBuilder, DTColumnBuilder) {
        $scope.dtColumns = [
            DTColumnBuilder.newColumn("Description", "Descripcion"),
            DTColumnBuilder.newColumn("Type", "Tipo"),
            DTColumnBuilder.newColumn("Color", "Color"),
            DTColumnBuilder.newColumn("Price", "Precio"),
            DTColumnBuilder.newColumn("Availability", "Disponibilidad")
        ]

        $scope.dtOptions = DTOptionsBuilder.newOptions().withOption('ajax', {
            url: "/Item/GetData",
            type: "POST"
        })
        .withPaginationType('full_numbers')
        .withDisplayLength(10);
    }]);


app.controller('AdminCtrl', ['$scope', '$http', 'DTOptionsBuilder', 'DTColumnBuilder',
    function ($scope, $http, DTOptionsBuilder, DTColumnBuilder) {
        $scope.dtColumns = [
            DTColumnBuilder.newColumn("Description", "Descripcion"),
            DTColumnBuilder.newColumn("Type", "Tipo"),
            DTColumnBuilder.newColumn("Color", "Color"),
            DTColumnBuilder.newColumn("Price", "Precio"),
            DTColumnBuilder.newColumn("Availability", "Disponibilidad"),
            DTColumnBuilder.newColumn(null).withTitle('Actions').notSortable()
            .renderWith(function (data, type, full, meta) {
                return '<button class="btn" onclick="editItem(' + data.ID + ')">' +
                    '   Edit' +
                    '</button>&nbsp;' +
                    '<button  class="btn" onclick="deleteItem(' + data.ID + ')">' +
                    '   Delete' +
                    '</button>';
            })
        ]

        $scope.dtOptions = DTOptionsBuilder.newOptions().withOption('ajax', {
            url: "/AdminItem/GetData",
            type: "POST"
        })
        .withPaginationType('full_numbers')
        .withDisplayLength(10);
    }]);
