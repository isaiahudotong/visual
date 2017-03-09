$(function() {
  //settings
  var indicator = "NY.GDP.MKTP.KD.ZG"; //"EG.USE.COMM.FO.ZS"; quid if request fail: vector empty need to fix this
  var country = "AFG",
    region = "SAS",
    income = "LIC";
  var lenght = 20;
  var display = 20;

  // Set up URL request
  var url_country = "http://api.worldbank.org/countries/" + country + "/indicators/" + indicator + "?per_page=" + display + "&MRV=" + lenght + "&format=jsonP&prefix=?"
  var url_region = "http://api.worldbank.org/countries/" + region + "/indicators/" + indicator + "?per_page=" + display + "&MRV=" + lenght + "&format=jsonP&prefix=?"
  var url_income = "http://api.worldbank.org/countries/" + income + "/indicators/" + indicator + "?per_page=" + display + "&MRV=" + lenght + "&format=jsonP&prefix=?"
  var url_world = "http://api.worldbank.org/countries/WLD/indicators/" + indicator + "?per_page=" + display + "&MRV=" + lenght + "&format=jsonP&prefix=?"

  $("#api").append("<b>API request is:</b> " + url_country);

  var arrayString = [],
    Date = [],
    array_country = [],
    array_region = [],
    array_income = [],
    array_world = [],
    arrayString_country = [],
    arrayString_region = [],
    arrayString_income = [],
    arrayString_world = [];


  $.getJSON(url_country, function(json) {

    $.each(json[1], function(i, data) {
      country_name = data.country.value;
      // fill the string data array
      arrayString_country.push(data.value);
    });

    $.getJSON(url_region, function(json) {

      $.each(json[1], function(i, data) {
        region_name = data.country.value;
        arrayString_region.push(data.value);
      });


      $.getJSON(url_income, function(json) {
        $.each(json[1], function(i, data) {
          income_name = data.country.value;
          arrayString_income.push(data.value);
        });


        $.getJSON(url_world, function(json) {
          $.each(json[1], function(i, data) {
            indicatorName = data.indicator.value;
            // fill the date array
            Date.push(data.date);
            arrayString_world.push(data.value);
          });


          // querry send string that we need to convert into numbers or null
          for (var i = 0; i < arrayString_world.length; i++) { // we use world lenght since the world serie is supposed to be  the longer (the one with no missing values)
            if (arrayString_country[i] != null) {
              array_country.push(parseFloat(arrayString_country[i]))
            } else {
              array_country.push(null)
            };

            if (arrayString_region[i] != null) {
              array_region.push(parseFloat(arrayString_region[i]))
            } else {
              array_region.push(null)
            };

            if (arrayString_income[i] != null) {
              array_income.push(parseFloat(arrayString_income[i]))
            } else {
              array_income.push(null)
            };

            if (arrayString_world[i] != null) {
              array_world.push(parseFloat(arrayString_world[i]))
            } else {
              array_world.push(null)
            };
          };



          // Create the Chart
          var chart = new Highcharts.Chart({

            chart: {
              type: 'spline',
              renderTo: 'container'
            },
            colors: ['#6e9fc5', '#ffdf51', '#a6ca6d', '#ad46d6', '#f26a2e', '#00adef', '#f4bb90'],
            title: {
              text: indicatorName,
              style: {
                "fontSize": "14px"
              }
            },
            type: 'spline',
            tooltip: {
              valueDecimals: 2,
              pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>'
            },
            plotOptions: {
              series: {
                marker: {
                  enabled: false
                }
              }
            },
            subtitle: {
              text: 'Source: World Bank Data'
            },
            xAxis: {
              categories: Date.reverse()
            }, //.reverse() to have the min year on the left 
            series: [{
              name: country_name,
              data: array_country.reverse()
            }, {
              name: region_name,
              data: array_region.reverse()
            }, {
              name: income_name,
              data: array_income.reverse()
            }, {
              name: 'World',
              data: array_world.reverse()
            }]
          }); //end highcharts

          $('#getcsv').click(function() {
            text = chart.getCSV()
            var textToSave = text
            var hiddenElement = document.createElement('a');
            hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
            hiddenElement.target = '_blank';
            hiddenElement.download = 'Data.csv';
            hiddenElement.click();
          });

        }); //end country
      }); // end world
    }); //end region
  }); //end income
});
