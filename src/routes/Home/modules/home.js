import catalogNodes from '../../../static/CatalogNodes.json'
import translatedFields from '../../../static/translatedFields.json'
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
    let catalogs
    let title = 'COLLECTIONS'
    let listType = false
    if( id === '0'){
       catalogs = catalogNodes.filter((catalogNode)=>{
        return (typeof catalogNode._p_parent==='undefined')
      })
    } else{
      catalogs = catalogNodes.filter((catalogNode)=>{
       return (typeof catalogNode._p_parent!=='undefined')&& (catalogNode._p_parent.includes(id))
     })
     const currentCatalog = catalogNodes.filter((catalogNode) => {
       return catalogNode._id === id
     })
     title = currentCatalog[0].name
     listType = currentCatalog[0].isLeaf
     console.log('adfadsfadsfad', listType)
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
      payload : {
        catalogs,
        title,
        listType,
      }
    })
  }
}
export const fetchProducts = (id) => {
  return (dispatch, getState) => {
    //
    const products = translatedFields.filter((translatedField)=>{
      return translatedField.ownerId == id
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
  [FETCH_CATALOGS]    : (state, action) => ({ ...state, catalogs: action.payload.catalogs, title: action.payload.title, listType: action.payload.listType }),
  [FETCH_PRODUCTS]    : (state, action) => ({ ...state, products: action.payload }),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  catalogs: [],
  products: [],
  title: '',
  listType: ''
}
export default function homeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
