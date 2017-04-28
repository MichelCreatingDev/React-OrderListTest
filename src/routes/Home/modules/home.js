import catalogNodes from '../../../static/CatalogNodes.json'
import translatedFields from '../../../static/translatedFields.json'
// ------------------------------------
// Constants
// ------------------------------------
export const FETCH_CATALOGS = 'FETCH_CATALOGS'
export const FETCH_TRANSLATIONS = 'FETCH_TRANSLATIONS'

// ------------------------------------
// Actions
// ------------------------------------


export const fetchCatalogs = (id) => {
  return (dispatch, getState) => {
    //
    let catalogs
    let title = ''
    let listType = false
    if( id === '0'){
       catalogs = catalogNodes.filter((catalogNode)=>{
        return (typeof catalogNode._p_parent==='undefined')
      })
      title = 'COLLECTIONS'
    } else{
      catalogs = catalogNodes.filter((catalogNode)=>{
       return (typeof catalogNode._p_parent!=='undefined')&& (catalogNode._p_parent.includes(id))
     })
     const currentCatalog = catalogNodes.filter((catalogNode) => {
       return catalogNode._id === id
     })
     listType = currentCatalog[0].isLeaf
     title = currentCatalog[0].name
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
export const fetchTranslations = (id) => {
  return (dispatch, getState) => {
    //
    const translations = translatedFields.filter((translatedField)=>{
      return translatedField.ownerId == id
    })
    //

    dispatch({
      type    : FETCH_TRANSLATIONS,
      payload : translations
    })
  }
}


export const actions = {
  fetchCatalogs,
  fetchTranslations
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [FETCH_CATALOGS]    : (state, action) => ({ ...state, catalogs: action.payload.catalogs, title: action.payload.title, listType: action.payload.listType }),
  [FETCH_TRANSLATIONS]    : (state, action) => ({ ...state, translations: action.payload }),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  catalogs: [],
  translations: [],
  title: '',
  listType: ''
}
export default function homeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
