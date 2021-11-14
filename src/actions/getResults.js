import { getSearchResults } from '../services/omdbApi.js';
import { resultsReceived, searchFailed } from './index';

export const fetchResults = (title, type, page) => async dispatch => {
  const results = await getSearchResults(title, type, page);
  if (results.Error) {
    return dispatch(searchFailed(results.Error));
  }

  dispatch(resultsReceived(title, results.Search, page));
}
