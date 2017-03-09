//find all countries: http://api.worldbank.org/countries?format=json

$(function(){

	/*COUNTRIES*/
	var urls = ['AGO', 'BEN', 'BFA', 'BWA', 'CAF'],
		chart = new Highcharts.Chart({
					chart: {
						type: 'spline',
						renderTo: 'container'
					},

					tooltip: {
						valueDemicals: 2,
						shared: true,
						pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>'
					},

					subtitle: {
						text:'Source: WB Data'
					},
					title: {
						text: 'indicator'
					},
					yAxis: {
						labels: {
							format: '{value}%'
						}
					},
					plotOptions: {
						series: {
							marker: {
								enabled: false
							}
						}
					},

					xAxis: {
						reversed: true,
						type: 'category'
					},
					series: []
			});

		$.each(urls, function(index,country) {
		
	//	if(document.getElementByID('selectid').value == country) 

		console.log("at index: " + index + "" + "country: " + country);

			var array_final = [];
			// var hello = 'http://api.worldbank.org/countries/' + country + '/indicators/NY.GDP.MKTP.KD.ZG?per_page=30&MRV=30&format=jsonP&prefix=?';
			// console.log(hello);
			//http://api.worldbank.org/countries/BWA/indicators/NY.GDP.MKTP.KD.ZG?per_page=30&MRV=30&format=jsonP&prefix=?
			$.getJSON('https://api.worldbank.org/countries/' + 
				country + '/indicators/NY.GDP.MKTP.KD.ZG?per_page=30&MRV=30&format=jsonP&prefix=?',
				function(json) {
					$.each(json[1],function(i,data){
						country_name = data.country.value;
						indicatorName = data.indicator.value; //"GDP growth (annual %)"

						//pusing data into arrays
						//name is a year (category on xaxis)
						//y is a value (value on the yAxis)

						if (data.value != null){
							array_final.push({
								y: parseFloat(data.value),
								name: parseInt(data.date,10)
							});
						} else {
							array_final.push({
								y: null,
								name: parseInt(data.date,10)
							});
						}
					});
					chart.setTitle({
						text:indicatorName,
					});

					//add new country to chart
					chart.addSeries({
						name: country_name,
						data: array_final
					});
				});
			});

});