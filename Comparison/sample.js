$(function() {

//Legal/regulatory
//management team
//marget size
//social benefit

	Highcharts.chart('container', {

	    chart: {
	        polar: true,
	        type: 'line'
	    },

	    title: {
	        text: 'Custos Media',
	        x: -80
	    },

	    pane: {
	        size: '80%'
	    },

	    xAxis: {
	        categories: ['Legal', 'Sales', 'Development',
	                'Marketing', 'Social Benefit', 'Management'],
	        tickmarkPlacement: 'on',
	        lineWidth: 0
	    },

	    yAxis: {
	        gridLineInterpolation: 'polygon',
	        lineWidth: 0,
	        min: 0
	    },

	    tooltip: {
	        shared: true,
	        pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
	    },

	    legend: {
	        align: 'right',
	        verticalAlign: 'top',
	        y: 70,
	        layout: 'vertical'
	    },

	    series: [{
	        name: 'Allocated Budget',
	        data: [43000, 19000, 60000, 35000, 17000, 10000],
	        pointPlacement: 'on'
	    }, {
	        name: 'Actual Spending',
	        data: [50000, 39000, 42000, 31000, 26000, 14000],
	        pointPlacement: 'on'
	    }]

	});
});