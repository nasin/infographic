import introPage from './pages/intro/introPage.js';
import teamPage from './pages/team/teamPage.js';
import averagePlayerValuationPage from './pages/averagePlayerValuation/averagePlayerValuationPage.js';
import creditsPage from './pages/credits/creditsPage.js';
import goalScorersPage from './pages/goalScorers/goalScorersPage.js';
import hostPage from './pages/host/hostPage.js';
import hostPollPage from './pages/hostPoll/hostPollPage.js';
import hostPollResultPage from './pages/hostPollResult/hostPollResultPage.js';
import matchesPage from './pages/matches/matchesPage.js';
import mostValuablePlayerPage from './pages/mostValuablePlayer/mostValuablePlayerPage.js';
import mostValuableSquadPage from './pages/mostValuableSquad/mostValuableSquadPage.js';
import playerPollPage from './pages/playerPoll/playerPollPage.js';
import playerPollResultPage from './pages/playerPollResult/playerPollResultPage.js';

export default {
  '/': introPage,
  '/teamPage': teamPage,
  '/hostPollPage': hostPollPage,
  '/hostPollResultPage': hostPollResultPage,
  '/hostPage': hostPage,
  '/playerPollPage': playerPollPage,
  '/playerPollResultPage': playerPollResultPage,
  '/mostValuablePlayerPage': mostValuablePlayerPage,
  '/mostValuableSquadPage': mostValuableSquadPage,
  '/averagePlayerValuationPage': averagePlayerValuationPage,
  '/goalScorersPage': goalScorersPage,
  '/matchesPage': matchesPage,
  '/creditsPage': creditsPage
};
