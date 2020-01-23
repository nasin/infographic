export default () => {
  Highcharts.mapChart('team', {
    chart: {
      map: 'custom/world-palestine-highres',
      backgroundColor: backgroundColor,
      borderColor:"#ebebeb",
      borderWidth:1
    },
    legend:{
        verticalAlign:'top',
       
        padding:20
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
        verticalAlign: 'top'
      }
    },
    plotOptions: {
      map: {
        allAreas: false,
        joinBy: ['iso-a2', 'code'],
        dataLabels: {
          enabled: false
        }
      }
    },
    tooltip: {
      headerFormat: '',
      pointFormat: '<b>{series.name}</b><br/>{point.name}'
    },
    series: [
      {
        name: 'Copa América',
        color: americaColor,
        data: [
          'AR',
          'US',
          'MX',
          'BR',
          'CL',
          'CO',
          'UY',
          'EC',
          'CR',
          'JM',
          'HT',
          'PA',
          'PY',
          'PE',
          'VE',
          'BO'
        ].map(function(code) {
          return {
            code: code
          };
        })
      },
      {
        name: 'UEFA Euro',
        color: europeColor,
        data: [
          'FR',
          'GB',
          'CZ',
          'IS',
          'AT',
          'PT',
          'ES',
          'CH',
          'IT',
          'BE',
          'RO',
          'AL',
          'DE',
          'PL',
          'RU',
          'SK',
          'HR',
          'TR',
          'HU',
          'IE',
          'SE',
          'UA'
        ].map(function(code) {
          return {
            code: code
          };
        })
      },
      {
        name: 'Other',
        color: '#CCC3CC',
        data: [
          'AD',
          'AE',
          'AF',
          'AG',
          'AM',
          'AO',
          'AS',
          'AU',
          'AZ',
          'BA',
          'BB',
          'BD',
          'BF',
          'BG',
          'BH',
          'BI',
          'BJ',
          'BN',
          'BS',
          'BT',
          'BU',
          'BW',
          'BY',
          'BZ',
          'CA',
          'CD',
          'CF',
          'CG',
          'CI',
          'CM',
          'CN',
          'CNM',
          'CU',
          'CV',
          'CY',
          'DJ',
          'DK',
          'DM',
          'DO',
          'DZ',
          'EE',
          'EG',
          'EH',
          'ER',
          'ET',
          'FI',
          'FJ',
          'FM',
          'FO',
          'GA',
          'GD',
          'GE',
          'GH',
          'GL',
          'GM',
          'GN',
          'GQ',
          'GR',
          'GT',
          'GU',
          'GW',
          'GY',
          'GZ',
          'HN',
          'ID',
          'IL',
          'IN',
          'IQ',
          'IR',
          'JK',
          'JO',
          'JP',
          'KE',
          'KG',
          'KH',
          'KI',
          'KM',
          'KN',
          'KP',
          'KR',
          'KV',
          'KW',
          'KZ',
          'LA',
          'LB',
          'LC',
          'LI',
          'LK',
          'LR',
          'LS',
          'LT',
          'LU',
          'LV',
          'LY',
          'MA',
          'MC',
          'MD',
          'ME',
          'MG',
          'MH',
          'MK',
          'ML',
          'MM',
          'MN',
          'MP',
          'MR',
          'MT',
          'MU',
          'MV',
          'MW',
          'MY',
          'MZ',
          'NA',
          'NC',
          'NE',
          'NG',
          'NI',
          'NL',
          'NO',
          'NP',
          'NR',
          'NZ',
          'OM',
          'PG',
          'PH',
          'PK',
          'PR',
          'PW',
          'QA',
          'RS',
          'RW',
          'SA',
          'SB',
          'SC',
          'SD',
          'SG',
          'SH',
          'SI',
          'SL',
          'SM',
          'SN',
          'SO',
          'SR',
          'SS',
          'ST',
          'SV',
          'SW',
          'SX',
          'SY',
          'SZ',
          'TD',
          'TG',
          'TH',
          'TJ',
          'TL',
          'TM',
          'TN',
          'TO',
          'TT',
          'TV',
          'TW',
          'TZ',
          'UG',
          'UM',
          'UZ',
          'VA',
          'VC',
          'VI',
          'VN',
          'VU',
          'WE',
          'WS',
          'YE',
          'ZA',
          'ZM',
          'ZW'
        ].map(function(code) {
          return {
            code: code
          };
        })
      }
    ]
  });
};
