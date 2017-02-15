/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('app.dashboard')
        .controller('DashboardLineChartCtrl', DashboardLineChartCtrl);

    /** @ngInject */
    function DashboardLineChartCtrl($scope, $timeout, baConfig, $element, layoutPaths) {

        var vm = this;
        vm.updateLineChart = updateLineChart;
        vm.isFirstRun = isFirstRun;
        vm.firstRun = true;

        var layoutColors = baConfig.colors;
        //var id = $element[0].getAttribute('id');
        var id = 'lineChart';
        var lineChart = AmCharts.makeChart(id, {
            type: 'serial',
            theme: 'blur',
            color: layoutColors.defaultText,
            marginTop: 0,
            marginRight: 15,
            dataProvider: [],
            valueAxes: [
                {
                    axisAlpha: 0,
                    position: 'left',
                    gridAlpha: 0.5,
                    gridColor: layoutColors.border,
                }
            ],
            graphs: [
                {
                    id: 'g1',
                    balloonText: '[[value]]',
                    bullet: 'round',
                    bulletSize: 8,
                    lineColor: layoutColors.success,
                    lineThickness: 2,
                    negativeLineColor: layoutColors.warning,
                    type: 'smoothedLine',
                    valueField: 'value'
                }
            ],
            chartScrollbar: {
                graph: 'g1',
                gridAlpha: 0,
                color: layoutColors.defaultText,
                scrollbarHeight: 55,
                backgroundAlpha: 0,
                selectedBackgroundAlpha: 0.05,
                selectedBackgroundColor: layoutColors.defaultText,
                graphFillAlpha: 0,
                autoGridCount: true,
                selectedGraphFillAlpha: 0,
                graphLineAlpha: 0.2,
                selectedGraphLineColor: layoutColors.defaultText,
                selectedGraphLineAlpha: 1
            },
            chartCursor: {
                categoryBalloonDateFormat: 'MM DD YYYY',
                cursorAlpha: 0,
                valueLineEnabled: true,
                valueLineBalloonEnabled: true,
                valueLineAlpha: 0.5,
                fullWidth: true
            },
            dataDateFormat: 'MM DD YYYY',
            categoryField: 'date',
            categoryAxis: {
                minPeriod: 'DD',
                parseDates: true,
                minorGridAlpha: 0.1,
                minorGridEnabled: true,
                gridAlpha: 0.5,
                gridColor: layoutColors.border,
            },
            export: {
                enabled: true
            },
            creditsPosition: 'bottom-right',
            pathToImages: layoutPaths.images.amChart
        });
        lineChart.addListener('rendered', zoomChart);
        if (lineChart.zoomChart) {
            lineChart.zoomChart();
        }

        function zoomChart() {
            lineChart.zoomToIndexes(Math.round(lineChart.dataProvider.length * 0.4), Math.round(lineChart.dataProvider.length * 0.55));
        }

        function updateLineChart() {
            var delay = 0;
            if (lineChart.dataProvider === undefined) {
                delay = 1000;
            }
            $timeout(function () {
                lineChart.dataProvider = JSON.parse($scope.linedata);
                lineChart.validateData();
                vm.firstRun = false;
            }, delay);
        }

        function isFirstRun() {
            return vm.firstRun;
        }
    }

})();
