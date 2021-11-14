export const titleSet = title => ({
  type: 'TITLE_SET',
  title
});

export const searchTypeSet = searchType => ({
  type: 'SEARCH_TYPE_SET',
  searchType
});

export const resultsReceived = (title, results, page) => ({
  type: 'RESULTS_RECEIVED',
  results,
  title,
  page,
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

export const loadMoreRequested = page => ({
  type: 'LOAD_MORE_REQUESTED',
  page
});
