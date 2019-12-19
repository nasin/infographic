import loadChart from './goalScorers.js';

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
        <div class=" caTableChart" id="caGoalscorers"></div>
      </td>
      <td>
        <div id="euGoalscorers"></div>
      </td>
    </tr>
    <tr>
      <td class="caTableText">Chile\s Eduardo Vargas received the Golden Boot award for scoring six goals. In total,<b class="caText"> 91 goals</b> were scored by 62 different players, with three of them credited as own goals.</td>
      <td class="euTableText">There were <b class="euroText">108 goals scored</b> in 51 matches, for an average of 2.12 goals per match.</td>
    </tr>
  </table>
</p>`,
  afterRender: () => loadChart()
};
