import { getSearchResults } from '../services/omdbApi.js';
import { resultsReceived, searchFailed } from './index';

export const fetchResults = (title, year, type, page) => async dispatch => {
  const results = await getSearchResults(title, year, type, page);
  if (results.Error) {
    return dispatch(searchFailed(results.Error));
  }

  dispatch(resultsReceived(title, year, type, results.Search, page));
}
