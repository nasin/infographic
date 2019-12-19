import loadChart from './team.js';

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
      <td colspan="2">
        <div id="team"></div>
      </td>
    </tr>
    <tr>
      <td class="caTableText"><b class="caText">16 American teams</b> participated in the 45th edition of Copa América since its inception in 1916.</td>
      <td class="euTableText"><b class="euroText">24 Europeans teams</b> participated in the 15th UEFA European Championship. </td>
    </tr>
  </table>
</p>`,
  afterRender: () => loadChart()
};
