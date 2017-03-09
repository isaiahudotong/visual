$(function() {

	var url = "http://api.worldbank.org/countries/NOR/indicators/NY.GDP.MKTP.KD.ZG?per_page=30&MRV=30&format=jsonP&prefix=?";

	var arrayString = [],
		year_list = [],
		array_final = [];

	$.getJSON(url, function(json) {

		$.each(json[1], function(i,data) {

			country_name = data.country.value;

			indicatorName = data.indicator.value;
			console.log(data.value);
			arrayString.push(data.value);
		});

		//query send string that we need to convert into numbers
		for (var i=0;i<arrayString.length;i++){
			if (arrayString[i]!=null){
				array_final.push(parseFloat(arrayString[i]));
			} else {
				array_final.push(null);
			};

		}

		var chart = new Highcharts.Chart({
			chart: {
				type: 'spline',
				renderTo: 'container'
			},
			title: {
				text:indicatorName
			},
			plotOptions: {
				series: {
					marker: {
						enabled: false
						
					}
				}
			},
			subtlte: {
				text: 'Source: World Bank Data'
			},
			xAxis: {
				categories: year_list.reverse() //.reverse() to have the min year on the left 
			},
			series: [{
				name: country_name,
				data: array_final.reverse()
			}]

		});
	});

});