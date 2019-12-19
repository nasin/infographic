import loadChart from './hostPoll.js';

export default {
  getElements: () => `<p>
  <table>
    <tr>
      <td colspan="2">
        <h1>Host</h1>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <h2>Where was Copa América 2016 hosted?</h2>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <form action=""> 
        <input type="radio" name="hostPoll" value="Brazil"> Brazil <span class="f32"><span class="flag br flagsCountries"></span><br/> 
        <input type="radio" name="hostPoll" value="USA"> United States <span class="f32"><span class="flag us flagsCountries"></span><br/>
        </form>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <h2>Where was Euro 2016 hosted?</h2>
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <form action=""> 
        <input type="radio" name="hostPoll" value="Ireland"> Ireland <span class="f32"><span class="flag ie flagsCountries"></span><br /> 
        <input type="radio" name="hostPoll" value="France"> France <span class="f32"><span class="flag fr flagsCountries"></span><br />
        </form>
      </td>
    </tr>
  </table>
</p>`,
  onNext: () => loadChart()
};
