import loadChart from './credits.js';

export default {
  getElements: () => `<p><br /><br /><br />
  <table>
    <tr>
      <td>These charts were created with <a href="https://www.highcharts.com/">the Highcharts library</a>. Click here to learn more.</td>
    </tr>
    <tr>
      <td> Feel free to inspect and alter this code. You can download the souce here. (link to your github repo with the code).</td>
    </tr>
    <tr>
      <td>
        <p align="left">Data source: <a href="https://en.wikipedia.org/wiki/UEFA_Euro_2016#Final">Wikipeida</a> and <a href="https://www.statista.com/chart/4959/how-the-copa-america-and-euro-2016-measure-up/">Statista</a></p>
      </td>
    </tr>
  </table>
</p>`,
  afterRender: () => loadChart()
};
