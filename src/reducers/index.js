const initialState = {
  title: '',
  search_type: '',
  search_year: '',
  page: 1,
  isLoading: false,
  results: [],
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'TITLE_SET':
      return {
        ...state,
        title: action.title
      };
    case 'SEARCH_TYPE_SET':
      return {
        ...state,
        search_type: action.searchType
      };
    case 'SEARCH_YEAR_SET':
      return {
        ...state,
        search_year: action.searchYear
      };
    case 'SEARCH_CLEARED':
      return {
        ...state,
        title: action.title,
        results: action.results,
        errorMessage: action.errorMessage,
      };
    case 'SEARCH_FAILED':
        return {
          ...state,
          title: action.title,
          errorMessage: action.errorMessage,
        };
    case 'RESULTS_RECEIVED':
      return {
        ...state,
        title: action.title,
        search_year: action.search_year,
        search_type: action.search_type,
        page: action.page,
        results: action.page === 1 ? action.results : [...state.results, ...action.results],
        errorMessage: action.errorMessage
      };
    case 'LOAD_MORE_REQUESTED':
      return {
        ...state,
        page: action.page
      };
    default:
      return state
  }
}
