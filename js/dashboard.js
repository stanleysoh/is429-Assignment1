$(function() {
 
    var loginUsername = localStorage.getItem("loginUser");
    
    var node = document.createElement("LI");                 
    var status = document.createElement('a');
    
    status.className = 'status';
    status.innerHTML = "Welcome, " +loginUsername;
    
    node.appendChild(status);                              
    document.getElementById("navbarList").appendChild(node); 
    
    var active = false;
    
    $('.panel-collapse').collapse('show');

    $('#collapse-init').click(function () {
        if (active) {
            active = false;
            $('.panel-collapse').collapse('show');
            $('.panel-title').attr('data-toggle', '');
            $(this).text('Enable accordion behavior');
        } else {
            active = true;
            $('.panel-collapse').collapse('hide');
            $('.panel-title').attr('data-toggle', 'collapse');
            $(this).text('Disable accordion behavior');
        }
    });
    
    $('#containerLine').highcharts({
        title: {
            text: 'Toilets Visitation Rate',
            x: -20 //center
        },
        subtitle: {
            text: 'Number of people that visited (per hour)',
            x: -20
        },
        xAxis: {
            categories: ['07:00', '08:00', '09:00', '10:00', '11:00', '12:00',
                '13:00', '14:00', '15:00', '16:00', '17:00', '18:00']
        },
        yAxis: {
            title: {
                text: 'No. of visitor(s)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: 'px'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Threshold',
            data: [1.0, 2.0, 5.0, 6.0, 6.0, 13.0, 13.0, 7.0, 8.0, 5.0, 4.0, 6.0]
        }, {
            name: 'L1 Male East',
            data: [3.0, 1.0, 10.0, 15.0, 21.0, 26.0, 28.0, 25.0, 19.0, 16.0, 16.0, 20.0]
        }, {
            name: 'L1 Male West',
            data: [2.0, 3.0, 4.0, 18.0, 22.0, 25.0, 25.0, 25.0, 17.0, 18.0, 18.0, 19.0]
        }]
    });
    
    $('#containerStackBar').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Toilet Popularity'
        },
        xAxis: {
            categories: ['L1 Male East', 'L1 Male West', 'L1 Female East', 'L1 Female West']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'No. of visitor(s)'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        legend: {
            align: 'right',
            x: -30,
            verticalAlign: 'top',
            y: 25,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    style: {
                        textShadow: '0 0 3px black'
                    }
                }
            }
        },
        series: [{
            name: 'Jan',
            data: [813, 732, 776, 695]
        }, {
            name: 'Feb',
            data: [791, 751, 757, 714]
        }, {
            name: 'Mar',
            data: [795, 778, 761, 699]
        }]
    });
    
    $('#containerStackLog').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Most Problematic Toilet'
        },
        xAxis: {
            categories: ['L1 Male East', 'L1 Male West', 'L1 Female East', 'L1 Female West']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Incident Reported'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        legend: {
            align: 'right',
            x: -30,
            verticalAlign: 'top',
            y: 25,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    style: {
                        textShadow: '0 0 3px black'
                    }
                }
            }
        },
        series: [{
            name: 'Jan',
            data: [500, 610, 490, 480]
        }, {
            name: 'Feb',
            data: [420, 551, 410, 388]
        }, {
            name: 'Mar',
            data: [402, 496, 387, 367]
        }]
    });
 
});

