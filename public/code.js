var linkToTheServer="http://localhost:3000/";
//var linkToTheServer = "https://m51zh2s55l.execute-api.eu-west-1.amazonaws.com/Dev/";


var americaColor = '#ff002b',
  europeColor = '#002bff';
var backgroundColor = 'rgba(255, 255, 255, 0.0)';
var flagArry = {
  Portugal: "flag pt",
  Wales: "flag _Wales",
  Germany: "flag de",
  Argentina: "flag ar",
  Uruguay: "flag uy",
  Columbia: "flag co"
};

var team = function() {
  Highcharts.mapChart('team', {
    chart: {
      map: 'custom/world-palestine-highres',
      backgroundColor: backgroundColor,
    },

    title: {
      text: ''
    },

    subtitle: {
      text: ''
    },

    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: 'bottom'
      }
    },
    plotOptions: {
      map: {
        allAreas: false,
        joinBy: ['iso-a2', 'code'],
        dataLabels: {
          enabled: false,
        },
      }
    },
    tooltip: {
      headerFormat: '',
      pointFormat: '<b>{series.name}</b><br/>{point.name}'
    },
    series: [{
      name: 'Copa América',
      color: americaColor,
      data: ['AR', 'US', 'MX', 'BR', 'CL', 'CO', 'UY', 'EC', 'CR', 'JM', 'HT', 'PA', 'PY', 'PE', 'VE', 'BO'].map(function(code) {
        return {
          code: code
        };
      })
    }, {
      name: 'UEFA Euro',
      color: europeColor,
      data: ['FR', 'GB', 'CZ', 'IS', 'AT', 'PT', 'ES', 'CH', 'IT', 'BE', 'RO', 'AL', 'DE', 'PL', 'RU', 'SK', 'HR', 'TR', 'HU', 'IE', 'SE', 'UA'].map(function(code) {
        return {
          code: code
        };
      })
    }, {
      name: 'Other',
      color: '#CCC3CC',
      data: ['AD', 'AE', 'AF', 'AG', 'AM', 'AO', 'AS', 'AU', 'AZ', 'BA', 'BB', 'BD', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BN', 'BS', 'BT', 'BU', 'BW', 'BY', 'BZ', 'CA', 'CD', 'CF', 'CG', 'CI', 'CM', 'CN', 'CNM', 'CU', 'CV', 'CY', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EE', 'EG', 'EH', 'ER', 'ET', 'FI', 'FJ', 'FM', 'FO', 'GA', 'GD', 'GE', 'GH', 'GL', 'GM', 'GN', 'GQ', 'GR', 'GT', 'GU', 'GW', 'GY', 'GZ', 'HN', 'ID', 'IL', 'IN', 'IQ', 'IR', 'JK', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KP', 'KR', 'KV', 'KW', 'KZ', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA', 'MC', 'MD', 'ME', 'MG', 'MH', 'MK', 'ML', 'MM', 'MN', 'MP', 'MR', 'MT', 'MU', 'MV', 'MW', 'MY', 'MZ', 'NA', 'NC', 'NE', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NZ', 'OM', 'PG', 'PH', 'PK', 'PR', 'PW', 'QA', 'RS', 'RW', 'SA', 'SB', 'SC', 'SD', 'SG', 'SH', 'SI', 'SL', 'SM', 'SN', 'SO', 'SR', 'SS', 'ST', 'SV', 'SW', 'SX', 'SY', 'SZ', 'TD', 'TG', 'TH', 'TJ', 'TL', 'TM', 'TN', 'TO', 'TT', 'TV', 'TW', 'TZ', 'UG', 'UM', 'UZ', 'VA', 'VC', 'VI', 'VN', 'VU', 'WE', 'WS', 'YE', 'ZA', 'ZM', 'ZW'].map(function(code) {
        return {
          code: code
        };
      })
    }, ]
  });

};

//Read data (polls) from  google spreadsheet
/*var hostFormResult=function(){
    Highcharts.data({
   googleSpreadsheetKey: '1y1oxugVyNnC3AUlgXnf3ZWw1qajJVKZmYMVLvyEA0jY', //real spread sheet
googleSpreadsheetWorksheet:2,
    // Custom handler when the spreadsheet is parsed
    parsed: function(columns) {
      var i = 1;
			debugger;
			var brazil = columns[2][1],
			USA = columns[3][1],
			Ireland = columns[4][1],
			France = columns[5][1];
			
      // Chart
Highcharts.chart('hostFormResult', {
        
        chart: {
            type: 'column',
        },
        
        title: {
          text: 'Result',
        },
        subtitle: {
            text: null,
        },

xAxis:{
categories:["Brazil", "United States", "Ireland", "France"],
plotLines: [{ // mark the weekend
            color: 'grey',
            width: 2,
            value: 1.5,
            dashStyle: 'longdashdot'
        }],

},
yAxis:{title:{text:"Number of answers"}},
legend:{enabled:false},

        series: [{
				name:"Number of votes",
          data: [{y:brazil, color:americaColor}, {y:USA, color:americaColor}, {y:Ireland, color: europeColor}, {y:France, color:europeColor } ],
        }]
      });
    }
  });
};*/

//Host polls: Read and send the polls to the server
var arrayUpdated = [];
var hostPoll = function() {

  var radios = document.getElementsByName('hostPoll');

  var arrSurvey = [{
    answer: 0
  }, {
    answer: 0
  }, {
    answer: 0
  }, {
    answer: 0
  }];

  for (var i = 0, length = radios.length; i < length; i++) {
    arrSurvey[i].answer = radios[i].checked ? 1 : 0;
  }

  //send email and the code to the server
  $.ajax({
    url: linkToTheServer + 'hostPoll',
    type: 'POST',
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify({
      answers: arrSurvey
    }),

    success: function(res) {
      console.log(res);
    },
    error: function(res) {
      console.log(res);
    }
  });
};


var hostPollResult = function() {
  setTimeout(function() {
    $.ajax({
      url: linkToTheServer + 'hostPollGET',
      type: 'GET',
      dataType: 'json',
      contentType: 'application/json',
      success: function(res) {
        console.log(res);
        for (i = 0; i < res.answer.length; i++) {
          arrayUpdated[i] = res.answer[i];
        }
        console.log("In ajax arrayUpdated:  " + arrayUpdated);
        //Make the chart
        Highcharts.chart('hostFormResult', {
          chart: {
            type: 'column',
            backgroundColor: backgroundColor,
          },
          title: {
            text: 'Result',
          },
          subtitle: {
            text: null,
          },
          xAxis: {
            labels: {
              style: {
                fontWeight: "bold"
              }
            },
            categories: [{
              useHTML: true,
              name: "Copa Amérca",
              categories: ["Brazil", "USA"]
            }, {
              name: "Euro2016",
              categories: ["Ireland", "France"]
            }]
          },
          yAxis: {
            title: {
              text: "Number of answers"
            }
          },
          legend: {
            enabled: false
          },

          series: [{
            name: "Number of votes",
            data: [{
              y: arrayUpdated[0],
              color: americaColor
            }, {
              y: arrayUpdated[1],
              color: americaColor
            }, {
              y: arrayUpdated[2],
              color: europeColor
            }, {
              y: arrayUpdated[3],
              color: europeColor
            }],
          }]
        })
      },
      error: function(res) {
        console.log(res);
      }
    });
  }, 250)
};

var host = function() {
  // map south america
  Highcharts.mapChart('caCities', {
    chart: {
      map: 'countries/us/custom/us-all-mainland',
      backgroundColor: backgroundColor,
    },
    title: {
      text: null
    },
    subtitle: {
      text: null
    },
    mapNavigation: {
      enabled: false,
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    tooltip: {
      useHTML: true,
      formatter: function() {
        return 'City: <b>' + this.key + '</b><br/> Stadium: <a href=""' + this.point.link + '""><b> ' + this.point.stade + '</b><a><br/>' + 'Capacity: <b>' + this.point.Capacity + '</b>';
      }
    },
    series: [{
      // Use the gb-all map with no data as a basemap
      name: 'Basemap',
      borderColor: '#A0A0A0',
      nullColor: 'rgba(200, 200, 200, 0.3)',
      showInLegend: false
    }, {
      name: 'Separators',
      type: 'mapline',
      nullColor: '#707070',
      showInLegend: false,
      enableMouseTracking: false
    }, {
      // Specify points using lat/lon
      type: 'mappoint',
      name: 'Cities',
      color: "blue",
      useHTML: true,
      color: Highcharts.getOptions().colors[1],
      data: [{
        name: 'Seattle',
        stade: "CenturyLink Field",
        link: "https://en.wikipedia.org/wiki/CenturyLink_Field",
        Capacity: 67000,
        color: americaColor,
        lat: 47.609722,
        lon: -122.333056
      }, {
        name: 'Santa Clara',
        stade: "Levi's Stadium",
        link: "https://en.wikipedia.org/wiki/Levi%27s_Stadium",
        Capacity: 68500,
        color: americaColor,
        lat: 37.36,
        lon: -121.97,
        lon: -118.255,
        dataLabels: {
          //align: 'left',
          //x: 5,
          y: -20,
          verticalAlign: 'top'
        }
      }, {
        name: 'Pasadena',
        stade: "Rose Bowl",
        link: "https://en.wikipedia.org/wiki/Rose_Bowl_(stadium)",
        Capacity: 92542,
        color: americaColor,
        lat: 34.156111,
        lon: -118.131944,
        dataLabels: {
          align: 'left',
          y: -10,
          verticalAlign: 'middle'
        }
      }, {
        name: 'Glendale',
        stade: "University of Phoenix Stadium",
        link: "hhttps://en.wikipedia.org/wiki/University_of_Phoenix_Stadium",
        Capacity: 63400,
        color: americaColor,
        lat: 34.146111,
        lon: -118.255,
        dataLabels: {
          align: 'left',
          x: 5,
          verticalAlign: 'buttom'
        }
      }, {
        name: 'Houston',
        stade: "NRG Stadium",
        link: "https://en.wikipedia.org/wiki/NRG_Stadium",
        Capacity: 71000,
        color: americaColor,
        lat: 29.762778,
        lon: -95.383056
      }, {
        name: 'Chicago',
        stade: "Soldier Field",
        link: "https://en.wikipedia.org/wiki/Soldier_Field",
        Capacity: 63500,
        color: americaColor,
        lat: 41.836944,
        lon: -87.684722,
        dataLabels: {
          align: 'rigth',
          x: -55,
          verticalAlign: 'top'
        }
      }, {
        name: 'Orlando',
        stade: "Camping World Stadium",
        link: "https://en.wikipedia.org/wiki/Camping_World_Stadium",
        Capacity: 60219,
        color: americaColor,
        lat: 28.54,
        lon: -81.38
      }, {
        name: 'Foxborough',
        stade: "Gillette Stadium",
        link: "https://en.wikipedia.org/wiki/Gillette_Stadium",
        Capacity: 68756,
        color: americaColor,
        lat: 42.065278,
        lon: -71.248333,
        dataLabels: {
          align: 'right',
          x: 5,
          //verticalAlign: 'top'
        }
      }, {
        name: 'East Rutherford',
        stade: "MetLife Stadium",
        link: "https://en.wikipedia.org/wiki/MetLife_Stadium",
        Capacity: 82566,
        lat: 40.817097,
        lon: -74.085024,
        color: americaColor,
        dataLabels: {
          align: 'left',
          x: -65,
          y: -5,
          verticalAlign: 'middle'
        }
      }, {
        name: 'Philadelphia',
        stade: "Lincoln Financial Field",
        link: "https://en.wikipedia.org/wiki/Lincoln_Financial_Field",
        Capacity: 69176,
        lat: 40.009376,
        lon: -75.133346,
        color: americaColor,
        dataLabels: {
          align: 'left',
          x: -65,
          verticalAlign: 'buttom'
        }
      }]
    }]
  });
  // map europe
  Highcharts.mapChart('euroCities', {
    chart: {
      map: 'countries/fr/custom/fr-all-mainland',
      backgroundColor: backgroundColor,
    },

    title: {
      text: null
    },

    subtitle: {
      text: null
    },

    mapNavigation: {
      enabled: false,
    },

    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },

    tooltip: {
      useHTML: true,
      formatter: function() {
        return 'City: <b>' + this.key + '</b><br/> Stadium: <a href=""' + this.point.link + '""><b> ' + this.point.stade + '</b><a><br/>' + 'Capacity: <b>' + this.point.Capacity + '</b>';
      }

    },
    series: [{
      // Use the gb-all map with no data as a basemap
      name: 'Basemap',
      borderColor: '#A0A0A0',
      nullColor: 'rgba(200, 200, 200, 0.3)',
      showInLegend: false
    }, {
      name: 'Separators',
      type: 'mapline',
      nullColor: '#707070',
      showInLegend: false,
      enableMouseTracking: false
    }, {
      // Specify points using lat/lon
      type: 'mappoint',
      name: 'Cities',
      color: "blue",
      useHTML: true,
      color: Highcharts.getOptions().colors[1],
      data: [{
        name: 'Lens',
        stade: "Stade Bollaert-Delelis	",
        link: "https://en.wikipedia.org/wiki/Stade_Bollaert-Delelis",
        Capacity: 38223,
        color: europeColor,
        lat: 50.4322,
        lon: 2.8333,
        dataLabels: {
          align: 'left',
          x: 5,
          verticalAlign: 'buttom'
        }
      }, {
        name: 'Villeneuve-d"Ascq',
        stade: "Stade Pierre-Mauroy",
        link: "https://en.wikipedia.org/wiki/Stade_Pierre-Mauroy",
        Capacity: 50186,
        color: europeColor,
        lat: 50.6233,
        lon: 3.145
      }, {
        name: 'Saint-Denis',
        stade: "Stade de France",
        link: "https://en.wikipedia.org/wiki/Stade_de_France",
        Capacity: 81338,
        color: europeColor,
        lat: 48.9356,
        lon: 2.3539
      }, {
        name: 'Paris',
        stade: "Parc des Princes",
        link: "https://en.wikipedia.org/wiki/Parc_des_Princes",
        Capacity: 48712,
        color: europeColor,
        lat: 48.8567,
        lon: 2.3508,
        dataLabels: {
          align: 'left',
          x: 5,
          verticalAlign: 'buttom'
        }
      }, {
        name: 'Décines-Charpieu',
        stade: "Parc Olympique Lyonnais	",
        link: "https://en.wikipedia.org/wiki/Parc_Olympique_Lyonnais",
        Capacity: 59286,
        color: europeColor,
        lat: 45.7694,
        lon: 4.9594
      }, {
        name: 'Saint-Étienne',
        stade: "Stade Geoffroy-Guichard	",
        link: "https://en.wikipedia.org/wiki/Stade_Geoffroy-Guichard",
        Capacity: 41965,
        color: europeColor,
        lat: 45.4347,
        lon: 4.3903,
        dataLabels: {
          align: 'left',
          x: 5,
          verticalAlign: 'buttom'
        }
      }, {
        name: 'Bordeaux',
        stade: "Nouveau Stade de Bordeaux",
        link: "https://en.wikipedia.org/wiki/Nouveau_Stade_de_Bordeaux",
        Capacity: 42115,
        color: europeColor,
        lat: 44.84,
        lon: -0.58
      }, {
        name: 'Nice',
        stade: "Stade de Nice",
        link: "https://en.wikipedia.org/wiki/Allianz_Riviera",
        Capacity: 35624,
        color: europeColor,
        lat: 43.7034,
        lon: 7.2663
      }, {
        name: 'Toulouse',
        stade: "Stadium Municipal",
        link: "https://en.wikipedia.org/wiki/Stadium_Municipal",
        Capacity: 33150,
        lat: 43.6045,
        lon: 1.444,
        color: europeColor,
        dataLabels: {
          align: 'left',
          x: 5,
          verticalAlign: 'middle'
        }
      }, {
        name: 'Marseille',
        stade: "Stade Vélodrome",
        link: "https://en.wikipedia.org/wiki/Stade_V%C3%A9lodrome",
        Capacity: 67394,
        lat: 43.2964,
        lon: 5.37,
        color: europeColor,
        dataLabels: {
          align: 'left',
          x: 5,
          verticalAlign: 'middle'
        }
      }]
    }]
  });
};


//player polls: Read and send the polls to the server

var playerPoll = function() {

  var radios = document.getElementsByName('playerPoll');
  var arrayPlayerUpdated = [];

  var arrSurvey = [{
    answer: 0
  }, {
    answer: 0
  }, {
    answer: 0
  }, {
    answer: 0
  }, {
    answer: 0
  }, {
    answer: 0
  }];

  for (var i = 0, length = radios.length; i < length; i++) {
    arrSurvey[i].answer = radios[i].checked ? 1 : 0;
  }

  //send email and the code to the server
  $.ajax({
    url: linkToTheServer + 'playerPoll',
    type: 'POST',
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify({
      answers: arrSurvey
    }),

    success: function(res) {
      console.log(res);
    },
    error: function(res) {
      console.log(res);
    }
  });
};

var playerPollResult = function() {

  var arrayPlayerUpdated = [];

  setTimeout(function() {
    $.ajax({
      url: linkToTheServer + 'playerPollGET',
      type: 'GET',
      dataType: 'json',
      contentType: 'application/json',
      success: function(res) {
        console.log(res);
        for (i = 0; i < res.answer.length; i++) {
          arrayPlayerUpdated[i] = res.answer[i];
        }
        console.log("In ajax arrayPlayerUpdated:  " + arrayPlayerUpdated);
        //Make the chart
        Highcharts.chart('playerFormResult', {
          chart: {
            type: 'column',
            backgroundColor: backgroundColor,
          },
          title: {
            text: 'Result',
          },
          subtitle: {
            text: null,
          },
          xAxis: {
            labels: {
              style: {
                fontWeight: "bold"
              }
            },
            categories: [{
              useHTML: true,
              name: "Copa Amérca",
              categories: ["Lionel Messi", "Luis Suarez", "James Rodriguez"]
            }, {
              name: "Euro2016",
              categories: ["Thomas Muller", "Gareth Bale", "Cristiano Ronaldo"]
            }]
          },
          yAxis: {
            title: {
              text: "Number of answers"
            }
          },
          legend: {
            enabled: false
          },

          series: [{
            name: "Number of votes",
            data: [{
              y: arrayPlayerUpdated[0],
              color: americaColor
            }, {
              y: arrayPlayerUpdated[1],
              color: americaColor
            }, {
              y: arrayPlayerUpdated[2],
              color: americaColor
            }, {
              y: arrayPlayerUpdated[3],
              color: europeColor
            }, {
              y: arrayPlayerUpdated[4],
              color: europeColor
            }, {
              y: arrayPlayerUpdated[5],
              color: europeColor
            }],
          }]
        })
      },
      error: function(res) {
        console.log(res);
      }
    });
  }, 250)
};


var mostValuablePlayers = function() {

  //most valuable players ca
  Highcharts.chart('caMostValuablePlayers', {
    chart: {
      type: 'column',
      inverted: true,
      backgroundColor: backgroundColor,
    },
    title: {
      text: null
    },
    subtitle: {
      text: null
    },
    xAxis: {
      categories: [
        'Argentina',
        'Uruguay',
        'Columbia'
      ],
      labels: {
        useHTML: true,
        formatter: function() {
          return '<span class="f32"><p class="' + flagArry[this.value] + '"></p></span>';
        }
      },

      title: {
        text: null
      },
      opposite: true,
    },
    yAxis: {
      title: {
        text: null
      },
      visible: false,
      reversed: true
    },

    tooltip: {
      enabled: false,
      headerFormat: '<b>{point.key}</b>',
      pointFormat: '  <b>{point.y}</b>',
      valueSuffix: ' millions USD'
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true,
          format: '{point.name} ${y}m'
        }
      }
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Most valuable players',
      color: "#ff002b",
      data: [{
        y: 134,
        name: "Lionel Messi"
      }, {
        y: 101,
        name: "Luis Suarez"
      }, {
        y: 78,
        name: "James Rodriguez"
      }]
    }]
  });
  //most valuable players europe
  Highcharts.chart('euroMostValuablePlayers', {
    chart: {
      type: 'column',
      inverted: true,
      backgroundColor: backgroundColor,
    },
    title: {
      text: null
    },
    subtitle: {
      text: null
    },
    xAxis: {
      categories: [
        'Portugal',
        'Wales',
        'Germany'
      ],
      labels: {
        useHTML: true,
        formatter: function() {
          return '<span class="f32"><p class="' + flagArry[this.value] + '"></p></span>';
        }
      },

      title: {
        text: null
      }
    },
    yAxis: {
      title: {
        text: null
      },
      visible: false,
    },

    tooltip: {
      enabled: false,
      headerFormat: '<b>{point.key}</b>',
      pointFormat: '  <b>{point.y}</b>',
      valueSuffix: ' millions USD'
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true,
          format: '{point.name} ${y}m'
        }
      }
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Most valuable players',
      color: "#002bff",
      data: [{
        y: 123,
        name: "Cristiano Ronaldo"
      }, {
        y: 90,
        name: "Gareth Bale"
      }, {
        y: 84,
        name: "Thomas Muller"
      }]
    }]
  });

};

var mostValuableSquad = function() {
  //most valuable squad ca
  Highcharts.chart('caMostValuableSquad', {
    chart: {
      type: 'column',
      inverted: true,
      backgroundColor: backgroundColor,
    },
    title: {
      text: null
    },
    subtitle: {
      text: null
    },
    xAxis: {
      categories: [
        'Argentina'
      ],
      labels: {
        useHTML: true,
        formatter: function() {
          return '<span class="f32"><p class="' + flagArry[this.value] + '"></p></span>';
        }
      },

      title: {
        text: null
      },
      opposite: true,
    },
    yAxis: {
      title: {
        text: null
      },
      visible: false,
      reversed: true
    },

    tooltip: {
      enabled: false,
      headerFormat: '<b>{point.key}</b>',
      pointFormat: '  <b>{point.y}</b>',
      valueSuffix: ' millions USD'
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true,

          format: '{point.name} ${y}m'
        }
      }
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Most valuable squad',
      color: "#ff002b",
      data: [{
        y: 591.5,
        name: "Argentina"
      }]
    }]
  });
  //most valuable squad euro
  Highcharts.chart('euroMostValuableSquad', {
    chart: {
      type: 'column',
      inverted: true,
      backgroundColor: backgroundColor,
    },
    title: {
      text: null
    },
    subtitle: {
      text: null
    },
    xAxis: {
      categories: [
        'Germany'
      ],
      labels: {
        useHTML: true,
        formatter: function() {
          return '<span class="f32"><p class="' + flagArry[this.value] + '"></p></span>';
        }
      },

      title: {
        text: null
      }
    },
    yAxis: {
      title: {
        text: null
      },
      visible: false,
    },

    tooltip: {
      enabled: false,
      headerFormat: '<b>{point.key}</b>',
      pointFormat: '  <b>{point.y}</b>',
      valueSuffix: ' millions USD'
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true,
          format: '{point.name} ${y}m'
        }
      }
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Most valuable squad',
      color: "#002bff",
      data: [{
        y: 629.4,
        name: "Germany"
      }]
    }]
  });
};



var averagePlayerValuation = function() {
  //Average player valuation CA
  Highcharts.chart('caAveragePlayerValuation', {
    chart: {
      type: 'column',
      inverted: true,
      backgroundColor: backgroundColor,
    },
    title: {
      text: null
    },
    subtitle: {
      text: null
    },
    xAxis: {
      categories: [
        'Argentina'
      ],
      labels: {
        useHTML: true,
        formatter: function() {

          return '';
        }
      },

      title: {
        text: null
      },
      opposite: true,
    },
    yAxis: {
      title: {
        text: null
      },
      visible: false,
      reversed: true
    },

    tooltip: {
      enabled: false,
      headerFormat: '',
      pointFormat: '<b>{point.y}</b>', //'  <b>{point.y}</b>',
      valueSuffix: ' millions USD'
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true,
          format: '{point.name} ${y}m'
        }
      }
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Average player valuation',
      color: "#ff002b",
      data: [{
        y: 5.8
      }]
    }]
  });
  //Average player valuation Euro
  Highcharts.chart('euAveragePlayerValuation', {
    chart: {
      type: 'column',
      inverted: true,
      backgroundColor: backgroundColor,
    },
    title: {
      text: null
    },
    subtitle: {
      text: null
    },
    xAxis: {
      categories: [
        'Germany'
      ],
      labels: {
        useHTML: true,
        formatter: function() {
          return '';
        }
      },

      title: {
        text: null
      }
    },
    yAxis: {
      title: {
        text: null
      },
      visible: false,
    },

    tooltip: {
      enabled: false,
      headerFormat: '',
      pointFormat: '<b>{point.y}</b>', //'  <b>{point.y}</b>',
      valueSuffix: ' millions USD'
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true,
          format: '{point.name} ${y}m'
        }
      }
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Average player valuation',
      color: "#002bff",
      data: [{
        y: 10.09
      }]
    }]
  });

};

var goalScorers = function() {
  //Goalscorers CA
  Highcharts.chart('caGoalscorers', {
    chart: {
      type: 'column',
      inverted: true,
      backgroundColor: backgroundColor,
    },
    title: {
      text: null
    },
    subtitle: {
      text: null
    },
    xAxis: {
      categories: [
        'Argentina'
      ],
      labels: {
        useHTML: true,
        formatter: function() {

          return '';
        }
      },

      title: {
        text: null
      },
      opposite: true,
    },
    yAxis: {
      title: {
        text: null
      },
      visible: false,
      reversed: true
    },

    tooltip: {
      enabled: false,
      headerFormat: '',
      pointFormat: '<b>{point.y}</b>', //'  <b>{point.y}</b>',
      valueSuffix: ' goal scorers'
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true,
          format: '{y} goal scorers'
        }
      }
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Goal scorers',
      color: "#ff002b",
      data: [{
        y: 91
      }]
    }]
  });

  //Goalscorers Euro
  Highcharts.chart('euGoalscorers', {
    chart: {
      type: 'column',
      inverted: true,
      backgroundColor: backgroundColor,
    },
    title: {
      text: null
    },
    subtitle: {
      text: null
    },
    xAxis: {
      categories: [
        'Germany'
      ],
      labels: {
        useHTML: true,
        formatter: function() {
          return '';
        }
      },

      title: {
        text: null
      }
    },
    yAxis: {
      title: {
        text: null
      },
      visible: false,
    },

    tooltip: {
      enabled: false,
      headerFormat: '',
      pointFormat: '<b>{point.y}</b>', //'  <b>{point.y}</b>',
      valueSuffix: ' goal scorers'
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true,
          format: '{y} goal scorers'
        }
      }
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Goal scorers',
      color: "#002bff",
      data: [{
        y: 108
      }]
    }]
  });
};

var matchs = function() {

  //matches euro
  var Portugal = "#ec343b",
    Croatia = "#d9141b",
    Poland = "#ab1015",
    Switzerland = "#7c0c0f",
    Wales = "#eee94b",
    NorthernIreland = "#ece634",
    Belgium = "#eae31c",
    Hungary = "#d9d214",
    France = "#a3ee4b",
    RepublicofIreland = "#70c212",
    Iceland = "#63aa10",
    England = "#55930e",
    Germany = "#4ba3ee",
    Slovakia = "#1c8bea",
    Italy = "#147ED9",
    Spain = "#1270c2";

  var data = [{
    id: '1',
    name: 'Portugal',
    color: Portugal
  }, {
    id: '2',
    parent: '1',
    name: 'Portugal',
    color: Portugal,
  }, {
    id: '3',
    parent: '1',
    name: 'France',
    color: France
  }, {
    id: '4',
    parent: '2',
    name: 'Portugal',
    value: 1,
    color: Portugal
  }, {
    id: '5',
    parent: '2',
    name: 'Wales',
    value: 1,
    color: Wales
  }, {
    id: '6',
    parent: '3',
    name: 'France',
    value: 1,
    color: France
  }, {
    id: '7',
    parent: '3',
    name: 'Germany',
    value: 1,
    color: Germany
  }, {
    id: '8',
    parent: '4',
    value: 1,
    name: 'Portugal',
    color: Portugal
  }, {
    id: '9',
    parent: '4',
    value: 1,
    name: 'Poland',
    color: Poland
  }, {
    id: '10',
    parent: '5',
    value: 1,
    name: 'Wales',
    color: Wales
  }, {
    id: '11',
    parent: '5',
    value: 1,
    name: 'Belgium',
    color: Belgium
  }, {
    id: '12',
    parent: '6',
    name: 'France',
    value: 1,
    color: France
  }, {
    id: '13',
    parent: '6',
    name: 'Iceland',
    value: 1,
    color: Iceland
  }, {
    id: '14',
    parent: '7',
    name: 'Germany',
    value: 1,
    color: Germany
  }, {
    id: '15',
    parent: '7',
    name: 'Italy',
    value: 1,
    color: Italy
  }, {
    id: '16',
    parent: '8',
    value: 1,
    name: 'Portugal',
    goals: 4,
    color: "#ec343b"
  }, {
    id: '17',
    parent: '8',
    value: 1,
    name: 'Croatia',
    goals: 3,
    color: "#d9141b"
  }, {
    id: '18',
    parent: '9',
    value: 1,
    name: 'Poland',
    goals: 2,
    color: "#ab1015"
  }, {
    id: '19',
    parent: '9',
    value: 1,
    name: 'Switzerland',
    goals: 1,
    color: "#7c0c0f"
  }, {
    id: '20',
    parent: '10',
    value: 1,
    name: 'Wales',
    goals: '1 (3)',
    color: "#eee94b"
  }, {
    id: '21',
    parent: '10',
    value: 1,
    name: 'Northern Ireland',
    goals: '1 (4)',
    color: "#ece634"
  }, {
    id: '22',
    parent: '11',
    value: 1,
    name: 'Belgium',
    goals: '1 (3)',
    color: "#eae31c"
  }, {
    id: '23',
    parent: '11',
    value: 1,
    name: 'Hungary',
    goals: '1 (2)',
    color: "#d9d214"
  }, {
    id: '24',
    parent: '12',
    value: 1,
    name: 'France',
    color: "#a3ee4b"
  }, {
    id: '25',
    parent: '12',
    value: 1,
    name: 'Republic of Ireland',
    color: "#70c212"
  }, {
    id: '26',
    parent: '13',
    value: 1,
    name: 'Iceland',
    color: "#63aa10"
  }, {
    id: '27',
    parent: '13',
    value: 1,
    name: 'England',
    color: "#55930e"
  }, {
    id: '28',
    parent: '14',
    value: 1,
    name: 'Germany',
    color: "#4ba3ee"
  }, {
    id: '29',
    parent: '14',
    value: 1,
    name: 'Slovakia',
    color: "#1c8bea"
  }, {
    id: '30',
    parent: '15',
    value: 1,
    name: 'Italy',
    color: "#147ED9"
  }, {
    id: '31',
    parent: '15',
    value: 1,
    name: 'Spain',
    color: "#1270c2"
  }];

  Highcharts.chart('euMatches', {

    chart: {
      height: '100%',
      backgroundColor: backgroundColor,
    },

    title: {
      text: null
    },
    series: [{
      type: "sunburst",
      data: data,
      startAngle: -90,
      dataLabels: {
        formatter: function() {
          if (this.point.options.name) {
            return '<b>' + this.point.name + '</b><br>';
          }
        },
        style: {
          fontWeight: 'normal',
          fontSize: '12px'
        }
      },
      color: '#f8f8f8',
      borderColor: 'gray'

    }],
    tooltip: {
      headerFormat: "",
      pointFormat: '{point.name}'
    },
    credits: {
      enabled: false
    },
    responsive: {
      rules: [{
        condition: {
          maxWidth: 600
        },
        chartOptions: {
          series: [{
            dataLabels: {
              style: {
                fontSize: '9px'
              }
            }
          }]
        }
      }]
    }
  });

  //matches ca

  var Chile = "#ec343b",
    Mexico = "#ab1015",
    Colombia = "#eee94b",
    Peru = "#eae31c",
    Argentina = "#a3ee4b",
    Venezuela = "#63aa10",
    USA = "#4ba3ee",
    Ecuador = "#147ED9";

  var data = [{
      id: '1',
      name: 'Chile',
      color: Chile,
    }, {
      id: '2',
      parent: '1',
      name: 'Chile',
      color: Chile,
    }, {
      id: '3',
      parent: '1',
      name: 'Argentina',
      color: Argentina
    },

    {
      id: '4',
      parent: '2',
      name: 'Chile',
      value: 1,
      color: Chile
    }, {
      id: '5',
      parent: '2',
      name: 'Colombia',
      value: 1,
      color: Colombia
    }, {
      id: '6',
      parent: '3',
      name: 'Argentina',
      value: 1,
      color: Argentina
    }, {
      id: '7',
      parent: '3',
      name: 'USA',
      value: 1,
      color: USA
    },


    {
      id: '8',
      parent: '4',
      value: 1,
      name: 'Chile',
      color: Chile
    }, {
      id: '9',
      parent: '4',
      value: 1,
      name: 'Mexico',
      color: Mexico
    }, {
      id: '10',
      parent: '5',
      value: 1,
      name: 'Colombia',
      color: Colombia
    }, {
      id: '11',
      parent: '5',
      value: 1,
      name: 'Peru',
      color: Peru
    },


    {
      id: '12',
      parent: '6',
      name: 'Argentina',
      value: 1,
      color: Argentina
    }, {
      id: '13',
      parent: '6',
      name: 'Venezuela',
      value: 1,
      color: Venezuela
    }, {
      id: '14',
      parent: '7',
      name: 'USA',
      value: 1,
      color: USA
    }, {
      id: '15',
      parent: '7',
      name: 'Ecuador',
      value: 1,
      color: Ecuador
    },

  ];
  Highcharts.chart('caMatches', {

    chart: {
      height: '100%',
      backgroundColor: backgroundColor,
    },

    title: {
      text: null
    },
    series: [{
      type: "sunburst",
      data: data,
      startAngle: -90,
      dataLabels: {
        formatter: function() {
          if (this.point.options.name) {
            return '<b>' + this.point.name + '</b><br>';
          }
        },
        style: {
          fontWeight: 'normal',
          fontSize: '12px'
        }
      },
      color: '#f8f8f8',
      borderColor: 'gray'

    }],
    tooltip: {
      headerFormat: "",
      pointFormat: '{point.name}'
    },
    credits: {
      enabled: false
    }
  });
};
