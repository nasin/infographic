import loadChart from './hostPollResult.js';

export default {
  getElements: () =>
    `<p class="hostFormResult" id="hostFormResult"><i class="fa fa-spinner fa-spin" style="font-size:30px"></i></p>`,
  afterRender: () => loadChart()
};
