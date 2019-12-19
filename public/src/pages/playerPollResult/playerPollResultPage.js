import loadChart from './playerPollResult.js';

export default {
  getElements: () =>
    `<p class="playerFormResult" id="playerFormResult">
      <i class="fa fa-spinner fa-spin" style="font-size:30px" />
    </p>`,
  afterRender: () => loadChart()
};
