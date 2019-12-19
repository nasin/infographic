import loadChart from './matches.js';

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
        <div class=" caTableChart" id="caMatches"></div>
      </td>
      <td>
        <div id="euMatches"></div>
      </td>
    </tr>
    <tr>
      <td class="caTableText"><b class="caText"> Chile was the winner</b> of the Copa America 2016 at MetLife Stadium in East Rutherford, New Jersey.</td>
      <td class="euTableText"><b class="euroText">Portugal was the winner</b> of the Euro 2016, for the first time, claimed a major title by defeating France in Paris.</td>
    </tr>
  </table>
</p>`,
  afterRender: () => loadChart()
};
