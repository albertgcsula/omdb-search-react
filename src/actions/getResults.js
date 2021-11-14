import { getSearchResults } from '../services/omdbApi.js';
import { resultsReceived, searchFailed } from './index';

export const fetchResults = (title, type) => async dispatch => {
  const results = await getSearchResults(title, type);
  if (results.Error) {
    return dispatch(searchFailed(results.Error));
  }

  dispatch(resultsReceived(title, results.Search));
}
