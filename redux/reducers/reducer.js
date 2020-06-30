//combined reducers
import { combineReducer } from 'redux';
function itemsReducer(state = [], action) {
  switch (action.type) {
    case 'SET_ITEMS':
      return [...action.payload];
    default:
      return state;
  }
}

function typesReducer(state = [], action) {
  switch (action.type) {
    case 'SET_TYPES':
      return [...action.payload];
    default:
      return state;
  }
}

function contactsReducer(
  state = {
    phone1: '',
    phone2: '',
    email: '',
  },
  action
) {
  switch (action.type) {
    case 'SET_CONTACTS':
      return { ...action.payload };
    default:
      return state;
  }
}

// export default function reducer(state, action) {
//   return {
//     items: itemsReducer(state.items, action),
//     types: typesReducer(state.types, action),
//     contacts: contactsReducer(state.contacts, action)
//   }
// }

export default combineReducer({
  items: itemsReducer,
  types: typesReducer,
  contacts: contactsReducer,
});

// const reducer = combineReducers({
//   a: doSomethingWithA,
//   b: processB,
//   c: c,
// });

// function reducer(state = {}, action) {
//   return {
//     a: doSomethingWithA(state.a, action),
//     b: processB(state.b, action),
//     c: c(state.c, action),
//   };
// }

// base one reducer
export default function reducer(state, action) {
  // (previousState, action) => nextState
  switch (action.type) {
    case 'SET_ITEMS':
      return {
        // never assign to anything inside the state unless you clone it first
        ...state,
        items: action.payload,
      };
    case 'SET_TYPES':
      return {
        ...state,
        types: action.payload,
      };
    case 'SET_CONTACTS':
      return {
        ...state,
        contacts: action.payload,
      };
    default:
      return state;
  }
}
