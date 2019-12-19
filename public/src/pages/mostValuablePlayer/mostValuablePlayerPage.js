import loadChart from './mostValuablePlayer.js';

export default {
  getElements: () => `<p>
  <table>
    <tr>
      <td colspan="2">
        <h1 align="center">The most valuable player</h1>
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
        <div class=" caTableChart" id="caMostValuablePlayers"></div>
      </td>
      <td>
        <div id="euroMostValuablePlayers"></div>
      </td>
    </tr>
    <tr>
      <td class="caTableText">Lionel Messi is by far the <b class="caText">most valuable players</b> at the Copa América 2016 tournament; Messi\s market worth is <b><i>134 million USD</i></b>, followed by Luis Suarez (<b><i>101 million USD</i></b>), and James Rodriguez (<b><i>78 million USD</i></b>).</td>
      <td class="euTableText"><b class="euroText">The most valuable player</b> at the UEFA Euro 2016 is Cristiano Ronaldo (<b><i>123 million USD</i></b>), Gareth Bales is the second most valuable player (<b><i>90 million USD</i></b>), and Thomas Muller is the third (<b><i>84 million USD</i></b>).</td>
    </tr>
  </table>
</p>`,
  afterRender: () => loadChart()
};
