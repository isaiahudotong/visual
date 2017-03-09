$(function() {

	//if(document.getElementById('selectid').value == "southafrica"){
		const chartData = {
			'ethiopia':{
				chart: {
					type: 'spline',
					renderTo: 'container'
				},
				title: {
					text: 'Ethiopia Food Production Index'
				},
				plotOptions: {
					series: {
						marker: {
							enabled: false
						}
					}
				},
				legend: {
			        layout: 'vertical',
			        align: 'right',
			        verticalAlign: 'middle'
			    },
			    xAxis: {
			    	categories: ['2002','2003','2004','2005','2006',
								'2007','2008','2009','2010','2011',
								'2012','2013']
			    },
				series: [{
					name: 'Food Production Index',
					data: [84.8,87.6,92.8,102.9,104.4,107.1,
					115.3,121.6,136.8,137.8,147.0,150.6]
					}]
			
			},
			'congo':{
				chart: {
					type: 'spline',
					renderTo: 'container'
				},
				title: {
					text: 'Congo Food Production Index'
				},
				plotOptions: {
					series: {
						marker: {
							enabled: false
						}
					}
				},
				legend: {
			        layout: 'vertical',
			        align: 'right',
			        verticalAlign: 'middle'
			    },
			    xAxis: {
			    	categories: ['2002','2003','2004','2005','2006',
								'2007','2008','2009','2010','2011',
								'2012','2013']
			    },
				series: [{
					name: 'Food Production Index',
					data: [723,750,786,822,863,831,878,
							948,999,1074,1159,1217]
					}]
			
			},
			'southafrica': {
				chart: {
					type: 'spline',
					renderTo: 'container'
				},
				title: {
					text: 'South African Food Production Index'
				},
				plotOptions: {
					series: {
						marker: {
							enabled: false
						}
					}
				},
				legend: {
			        layout: 'vertical',
			        align: 'right',
			        verticalAlign: 'middle'
			    },
			    xAxis: {
			    	categories: ['2002','2003','2004','2005','2006',
								'2007','2008','2009','2010','2011',
								'2012','2013']
			    },
				series: [{
					name: 'Food Production Index',
					data: [97.7,96.9,98.7,102.1,119.6,
							117.5,118.7,117.3,120.5,122.3]
					}]
			
			}
		}
	
	$('#selectid').change(function(event) {
		var chart = Highcharts.chart(chartData[event.target.value]);
		
	})

	

});