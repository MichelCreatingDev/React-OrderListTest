// ------------------------------------
// Constants
// ------------------------------------
export const FETCH_CATALOGS = 'FETCH_CATALOGS'
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'

// ------------------------------------
// Actions
// ------------------------------------

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const fetchCatalogs = () => {
  return (dispatch, getState) => {
    //

    //
    const catalogs = [{id: 1}, { id: 2}]

    dispatch({
      type    : FETCH_CATALOGS,
      payload : catalogs
    })
  }
}
export const fetchProducts = () => {
  return (dispatch, getState) => {
    //

    //
    const products = [{id: 15}, { id: 25}]

    dispatch({
      type    : FETCH_PRODUCTS,
      payload : products
    })
  }
}


export const actions = {
  fetchCatalogs,
  fetchProducts
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [FETCH_CATALOGS]    : (state, action) => ({ ...state, catalogs: action.payload }),
  [FETCH_PRODUCTS]    : (state, action) => ({ ...state, products: action.payload }),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  catalogs: [],
  products: []
}
export default function homeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
