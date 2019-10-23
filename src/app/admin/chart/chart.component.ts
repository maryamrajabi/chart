import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
// import {zingchart} from 'zingChart';
declare const zingchart: any;

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, AfterViewInit {
    @Input() myChartID;
    @Input() myChartIDRadar;
    @Input() chartTyp;
    @Input() color;
    @Input() total;
    @Input() Count;
    @Input() totalCount;
    @Input() values;
    chart;
    chartRadar;

    constructor() {

    }

    ngOnInit() {
        /* pi chart */
        this.chart = {
            id: this.myChartID,
            data: {
                'graphset': [

                    {
                        'type': 'pie',
                        'backgroundColor': '#3b4475',
                        'plotarea': {
                            'margin': '0'
                        },
                        'scale': {
                            'sizeFactor': 5
                        },
                        'plot': {
                            'valueBox': {
                                'visible': false
                            },
                            'refAngle': 360,
                            'angleStart': 360,
                            'detach': false,
                            'slice': '100%',
                            'totals': [+this.total],
                            'animation': {
                                'speed': 1000,
                                'effect': 2,
                                'method': 0
                            },
                            'hoverState': {
                                'visible': true
                            }
                        },
                        'series': [
                            {
                                'size': '74%',
                                'values': [+this.Count],
                                'backgroundColor': this.color,
                                'borderWidth': 35,
                                'borderColor': this.color,
                                'text': '',
                                'tooltip': {
                                    'x': 305,
                                    'y': 140,
                                    'width': 100,
                                    'fontSize': 19,
                                    'padding': 30,
                                    'anchor': 'c',
                                    'fontFamily': 'IRANSans, Helvetica Neue, Helvetica, Atahoma',
                                    'text': '<span style=\'color:%color\'>%plot-text</span>' +
                                    '<br><span style=\'font-size:31px;font-weight:bold;color:%color;\'>%node-percent-value%</span>',
                                    'align': 'left',
                                    'borderWidth': 0,
                                    'backgroundColor': 'none',
                                }
                            },
                            {
                                'size': '44%',
                                'values': [+this.totalCount],
                                'backgroundColor': '#808080',
                                'borderWidth': 35,
                                'borderColor': '#808080',
                                'text': '',
                                'tooltip': {
                                    'x': 305,
                                    'y': 140,
                                    'width': 100,
                                    'fontSize': 19,
                                    'padding': 30,
                                    'anchor': 'c',
                                    'fontFamily': 'IRANSans, Helvetica Neue, Helvetica, Atahoma',
                                    'text': '<span style=\'color:%color\'>%plot-text</span><br>' +
                                    '<span style=\'font-size:31px;font-weight:bold;color:%color;\'>%node-percent-value%</span>',
                                    'align': 'left',
                                    'borderWidth': 0,
                                    'backgroundColor': 'none',
                                },
                            }
                        ],
                        'shapes': [
                            {
                                'type': 'pie', // green done
                                'flat': true,
                                'x': 262,
                                'y': 150,
                                'backgroundColor': '#fff',
                                'alpha': .2,
                                'size': 83,
                                'slice': 47,
                                'placement': 'bottom'
                            },
                            {
                                'type': 'pie', // blue done
                                'flat': true,
                                'x': 262,
                                'y': 150,
                                'backgroundColor': '#fff',
                                'alpha': .2,
                                'size': 129,
                                'slice': 92,
                                'placement': 'bottom'
                            }
                        ]
                    }
                ]
            },
            height: 300,
            width: 525
        };

        this.chart = {
            id: this.myChartID,
            data: {
                'graphset': [

                    {
                        'type': 'pie',
                        'backgroundColor': '#3b4475',
                        'plotarea': {
                            'margin': '0'
                        },
                        'scale': {
                            'sizeFactor': 5
                        },
                        'plot': {
                            'valueBox': {
                                'visible': false
                            },
                            'refAngle': 360,
                            'angleStart': 360,
                            'detach': false,
                            'slice': '100%',
                            'totals': [+this.total],
                            'animation': {
                                'speed': 1000,
                                'effect': 2,
                                'method': 0
                            },
                            'hoverState': {
                                'visible': true
                            }
                        },
                        'series': [
                            {
                                'size': '74%',
                                'values': [+this.Count],
                                'backgroundColor': this.color,
                                'borderWidth': 35,
                                'borderColor': this.color,
                                'text': '',
                                'tooltip': {
                                    'x': 305,
                                    'y': 140,
                                    'width': 100,
                                    'fontSize': 19,
                                    'padding': 30,
                                    'anchor': 'c',
                                    'fontFamily': 'IRANSans, Helvetica Neue, Helvetica, Atahoma',
                                    'text': '<span style=\'color:%color\'>%plot-text</span>' +
                                    '<br><span style=\'font-size:31px;font-weight:bold;color:%color;\'>%node-percent-value%</span>',
                                    'align': 'left',
                                    'borderWidth': 0,
                                    'backgroundColor': 'none',
                                }
                            },
                            {
                                'size': '44%',
                                'values': [+this.totalCount],
                                'backgroundColor': '#808080',
                                'borderWidth': 35,
                                'borderColor': '#808080',
                                'text': '',
                                'tooltip': {
                                    'x': 305,
                                    'y': 140,
                                    'width': 100,
                                    'fontSize': 19,
                                    'padding': 30,
                                    'anchor': 'c',
                                    'fontFamily': 'IRANSans, Helvetica Neue, Helvetica, Atahoma',
                                    'text': '<span style=\'color:%color\'>%plot-text</span><br>' +
                                    '<span style=\'font-size:31px;font-weight:bold;color:%color;\'>%node-percent-value%</span>',
                                    'align': 'left',
                                    'borderWidth': 0,
                                    'backgroundColor': 'none',
                                },
                            }
                        ],
                        'shapes': [
                            {
                                'type': 'pie', // green done
                                'flat': true,
                                'x': 262,
                                'y': 150,
                                'backgroundColor': '#fff',
                                'alpha': .2,
                                'size': 83,
                                'slice': 47,
                                'placement': 'bottom'
                            },
                            {
                                'type': 'pie', // blue done
                                'flat': true,
                                'x': 262,
                                'y': 150,
                                'backgroundColor': '#fff',
                                'alpha': .2,
                                'size': 129,
                                'slice': 92,
                                'placement': 'bottom'
                            }
                        ]
                    }
                ]
            },
            height: 300,
            width: 525
        };

        /* radar chart */
        this.chartRadar = {
            id: this.myChartIDRadar,
            data: {
                type: 'radar',
                plot: {
                    aspect: 'area',
                    animation: {
                        effect: 3,
                        sequence: 1,
                        speed: 700
                    },
                    tooltip: {
                        text: '%v',
                        backgroundColor: '#000',
                        fontSize: 19,
                    }
                },
                scaleV: {
                    visible: false
                },
                scaleK: {
                    values: '0:5:1',
                    labels: ['تعداد مشتریان', 'مجموع تراکنش ها', 'تراکنش غیرمستقیم',
                        'تراکنش مستقیم', 'تعداد تامین کنندگان', 'تعداد مرغداران'],
                    item: {
                        fontColor: '#fff',
                        fontFamily: 'IRANSans, Helvetica Neue, Helvetica, Atahoma',
                        fontSize: 19,
                        backgroundColor: '#45485d',
                        borderColor: 'transparent',
                        borderWidth: 1,
                        padding: '5 10',
                        borderRadius: 10
                    },
                    refLine: {
                        lineColor: '#c10000'
                    },
                    hoverState: {
                        'visible': false
                    },
                    tick: {
                        lineColor: '#59869c',
                        lineWidth: 0,
                        lineStyle: 'dotted',
                        size: 20
                    },
                    guide: {
                        lineColor: 'transparent',
                        lineStyle: 'solid',
                        alpha: 1,
                        backgroundColor: '#585b6d #4e5161'
                    }
                },
                series: [
                    // {
                    //     values: [59, 39, 38, 19, 21, 35],
                    //     text: 'farm'
                    // },
                    {
                        values: this.values,
                        lineColor: '#fff',
                        backgroundColor: '#fff'
                    }
                ]
            },
            height: '100%',
            width: '100%'
        };
    }

    ngAfterViewInit(): void {
        zingchart.render(this.chart);
        zingchart.render(this.chartRadar);
        // setTimeout(function () {
        //     zingchart.exec('chart-1', 'setseriesvalues', {
        //         plotindex: 0,
        //         values: [2, 2, 2]
        //     });
        // }, 3000);
        // zingchart.click = function (p) {
        //     alert('You clicked on the chart!');
        // };
    }

}
