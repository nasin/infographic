import loadChart from './mostValuableSquad.js';

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
        <div class=" caTableChart" id="caMostValuableSquad"></div>
      </td>
      <td>
        <div id="euroMostValuableSquad"></div>
      </td>
    </tr>
    <tr>
      <td class="caTableText">The <b class="caText">most valuable squad</b> at the Copa América tournament is the Argentina squad valued at <b><i>591.5 million USD</i></b>.</td>
      <td class="euTableText">Germany has the <b class="euroText">most valuable squad</b> (<b><i>629.4 million USD</i></b>) of any of the 24 teams competing at this summer\'s European Championship, while England is fourth behind Spain and Belgium.</td>
    </tr>
  </table>
</p>`,
  afterRender: () => loadChart()
};
