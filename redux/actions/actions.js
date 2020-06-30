// action types
export const SET_ITEMS = 'SET_ITEMS';
export const SET_TYPES = 'SET_TYPES';
export const SET_CONTACTS = 'SET_CONTACTS';

// action creators
export function setItems(items) { // sync
  return {
    type: 'SET_ITEMS',
    payload: { items }
  }
}