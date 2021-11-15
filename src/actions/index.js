export const titleSet = title => ({
  type: 'TITLE_SET',
  title
});

export const searchTypeSet = searchType => ({
  type: 'SEARCH_TYPE_SET',
  searchType
});

export const searchYearSet = searchYear => ({
  type: 'SEARCH_YEAR_SET',
  searchYear
});

export const resultsReceived = (title, searchYear, searchType, results, page) => ({
  type: 'RESULTS_RECEIVED',
  title,
  search_year: searchYear, 
  search_type: searchType,
  results,
  page,
  errorMessage: ''
});

export const searchCleared = () => ({
  type: 'SEARCH_CLEARED',
  title: '',
  search_year: '',
  search_type: '',
  results: [],
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
