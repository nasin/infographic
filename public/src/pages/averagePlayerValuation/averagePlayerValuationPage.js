import loadChart from './averagePlayerValuation.js';

export default {
  getElements: () => `<p>
  <table>
    <tr>
      <td>
        <h2 class="caText caHeader">Copa América 2016</h2>
      </td>
      <td>
        <h2 class="euroText euHeader">Euro 2016</h2>
      </td>
    </tr>
    <tr>
      <td>
        <div class=" caTableChart" id="caAveragePlayerValuation"></div>
      </td>
      <td>
        <div id="euAveragePlayerValuation"></div>
      </td>
    </tr>
    <tr>
      <td class="caTableText">The <b class="caText">average player salary</b> at the Copa América tournament is <b><i>5.8 million USD</i></b>.</td>
      <td class="euTableText">The <b class="euroText">average player salary</b> at the Euro 2016 is <b><i>10.09 million USD</i></b>. </td>
    </tr>
  </table>
</p>`,
  afterRender: () => loadChart()
};
