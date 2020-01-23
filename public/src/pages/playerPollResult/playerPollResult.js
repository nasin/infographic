//import ajax from './../../../utils/ajax.js';

export default () => {
  setTimeout(function() {
  //  ajax('GET', 'playerPollGET').then(data => {
      let arrayPlayerUpdated = [2,5,4,7];

      // for (let i = 0; i < data.answer.length; i++) {
      //   arrayPlayerUpdated[i] = data.answer[i];
      // }
      console.log('In ajax arrayPlayerUpdated:  ' + arrayPlayerUpdated);
      //Make the chart
      Highcharts.chart('playerFormResult', {
        chart: {
          type: 'column',
          backgroundColor: backgroundColor
        },
        title: {
          text: ''
        },
        subtitle: {
          text: null
        },
        xAxis: {
          labels: {
            style: {
              fontWeight: 'bold'
            }
          },
          categories: [
            {
              useHTML: true,
              name: 'Copa Amérca',
              categories: ['Lionel Messi', 'Luis Suarez', 'James Rodriguez']
            },
            {
              name: 'Euro2016',
              categories: ['Thomas Muller', 'Gareth Bale', 'Cristiano Ronaldo']
            }
          ]
        },
        yAxis: {
          title: {
            text: 'Number of answers'
          }
        },
        legend: {
          enabled: false
        },

        series: [
          {
            name: 'Number of votes',
            data: [
              {
                y: arrayPlayerUpdated[0],
                color: americaColor
              },
              {
                y: arrayPlayerUpdated[1],
                color: americaColor
              },
              {
                y: arrayPlayerUpdated[2],
                color: americaColor
              },
              {
                y: arrayPlayerUpdated[3],
                color: europeColor
              },
              {
                y: arrayPlayerUpdated[4],
                color: europeColor
              },
              {
                y: arrayPlayerUpdated[5],
                color: europeColor
              }
            ]
          }
        ]
      });
   // });
  }, 250);
};
