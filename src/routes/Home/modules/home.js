import catalogNodes from '../../../static/CatalogNodes.json'
// ------------------------------------
// Constants
// ------------------------------------
export const FETCH_CATALOGS = 'FETCH_CATALOGS'
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'

// ------------------------------------
// Actions
// ------------------------------------


export const fetchCatalogs = (id) => {
  return (dispatch, getState) => {
    //
    var catalogs = [];
    if( id === '0'){
       catalogs = catalogNodes.filter((catalogNode)=>{
        return (typeof catalogNode._p_parent==='undefined')
      })
    } else{
      catalogs = catalogNodes.filter((catalogNode)=>{
       return (typeof catalogNode._p_parent!=='undefined')&& (catalogNode._p_parent.includes(id))
     })
    }
    // adding counter
    var i = 0
    for (var item of catalogs) {
      const childs = catalogNodes.filter((catalogNode) => {
        return (typeof catalogNode._p_parent!=='undefined')&& (catalogNode._p_parent.includes(item._id))
      })
      catalogs[i].count = childs.length
      i++;
    }
    dispatch({
      type    : FETCH_CATALOGS,
      payload : catalogs
    })
  }
}
export const fetchProducts = (id) => {
  return (dispatch, getState) => {
    //
    const products = catalogNodes.filter((catalogNode)=>{
      return typeof (catalogNode.isLeaf==true) && (typeof catalogNode._p_parent!=='undefined') && (catalogNode._p_parent.includes(id))
    })
    //

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
