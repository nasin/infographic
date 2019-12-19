import loadChart from './playerPoll.js';

export default {
  getElements: () => `<p>
  <table>
    <tr>
      <td colspan="2">
        <h1>The most valuable player</h1>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <h2>Who is the most valuable player in Copa América 2016 hosted?</h2>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <form action=""> <input type="radio" name="playerPoll" value="Argentina"> Lionel Messi <span class="f32"><span class="flag ar flagsCountries"></span><br /> 
        <input type="radio" name="playerPoll" value="Uruguay"> Luis Suarez <span class="f32"><span class="flag uy flagsCountries"></span><br /> 
        <input type="radio" name="playerPoll" value="Columbia"> James Rodriguez <span class="f32"><span class="flag co flagsCountries"></span><br /> 
        </form>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <h2>Who is the most valuable player in Euro 2016 hosted?</h2>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <form action=""> <input type="radio" name="playerPoll" value="Germany"> Thomas Muller <span class="f32"><span class="flag de flagsCountries"></span><br /> 
        <input type="radio" name="playerPoll" value="Wales"> Gareth Bale <span class="f32"><span class="flag _Wales flagsCountries"></span><br /> 
        <input type="radio" name="playerPoll" value="Portugal"> Cristiano Ronaldo <span class="f32"><span class="flag pt flagsCountries"></span><br /> </form>
      </td>
    </tr>
  </table>
</p>`,
  onNext: () => loadChart()
};
