
const initialState = {
    cocktails: [],
    cocktail: [],
    loading: false,
    error: null,
  };
  
  const cocktailReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_COCKTAIL':
        return {
          ...state,
          loading: true,
        };
      case 'FETCH_COCKTAIL_SUCCESS':
        return {
          ...state,
          loading: false,
          cocktails: action.payload,
        };
      case 'FETCH_COCKTAIL_FAIL':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case 'SEARCH_COCKTAIL':
        return {
          ...state,
          loading: true,
        };
      case 'SEARCH_COCKTAIL_SUCCESS':
        return {
          ...state,
          loading: false,
          cocktails: action.payload,
        };
      case 'SEARCH_COCKTAIL_FAIL':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };

      default:
        return state;
    }
  };
  
export default cocktailReducer;
