import loadChart from './host.js';

export default {
  getElements: () => `<p>
  <table>
    <tr>
      <td colspan="2">
        <h1 align="center">Host</h1><br /><br />
      </td>
    </tr>
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
        <div class=" caTableChart" id="caCities"></div>
      </td>
      <td>
        <div id="euroCities"></div>
      </td>
    </tr>
    <tr>
      <td class="caTableText"> <b>The United States</b> <b class="caText">hosted</b> the event from the 3rd to the 26th of June 2016. Ten venues were selected for the tournament.</td>
      <td class="euTableText"> <b>France</b> <b class="euroText">hosted</b> the event from the June 10 to July 10, 2016. Ten venues were selected for the tournament.</td>
  </table>
</p>`,
  afterRender: () => loadChart()
};
