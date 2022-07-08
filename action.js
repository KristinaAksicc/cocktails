import axios from "axios";

function fetchCocktail(){
    return {
        type: 'FETCH_COCKTAIL',
    };
};
function fetchCocktailSuccess(cocktails){
    return {
      type: 'FETCH_COCKTAIL_SUCCESS',
      payload: cocktails,
    };
};
function fetchCocktailFail(error) {
    return {
      type: 'FETCH_COCKTAIL_FAIL',
      payload: error,
    };
};
function fetchSearchCocktails(){
    return {
        type: 'SEARCH_COCKTAIL',
    };
};
function fetchSearchCocktailSuccess(cocktails){
    return {
      type: 'SEARCH_COCKTAIL_SUCCESS',
      payload: cocktails,
    };
};
function fetchSearchCocktailFail(error) {
    return {
      type: 'SEARCH_COCKTAIL_FAIL',
      payload: error,
    };
};

export function fetchCocktails() {
    return function (dispatch) {
      dispatch(fetchCocktail());
      axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
        .then((response) => {
          const cocktails = response.data.drinks;
          dispatch(fetchCocktailSuccess(cocktails));
        })
        .catch((error) => {
          dispatch(fetchCocktailFail(error));
        });
    };
  }
  export function fetchSearchCocktail(searchText) {
    return function (dispatch) {
      dispatch(fetchSearchCocktails());
      axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
        )
        .then((response) => {
          const cocktails = response.data.drinks;
          dispatch(fetchSearchCocktailSuccess(cocktails));
        })
        .catch((error) => {
          dispatch(fetchSearchCocktailFail(error));
        });
    };
}
  
