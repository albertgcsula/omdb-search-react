export const titleSet = title => ({
  type: 'TITLE_SET',
  title
});

export const searchTypeSet = searchType => ({
  type: 'SEARCH_TYPE_SET',
  searchType
});

export const resultsReceived = (title, results) => ({
  type: 'RESULTS_RECEIVED',
  results,
  title,
  errorMessage: ''
});

export const searchCleared = () => ({
  type: 'SEARCH_CLEARED',
  results: [],
  title: '',
  errorMessage: ''
});

export const searchFailed = (errorMessage) => ({
  type: 'SEARCH_FAILED',
  results: [],
  title: '',
  errorMessage: errorMessage
});
