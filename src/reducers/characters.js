import { fromJS } from "immutable"
import { SET_CHARACTERS, SET_FAVORITE, SET_LOADING } from "../actions/types"

const initialState = fromJS({
  characters: [],
  loading: false,
})

export const charactersReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_CHARACTERS: 
      return state.setIn(['characters'], fromJS(action.payload))
    case SET_FAVORITE: 
      const currentCharacterIndex = state.get('characters').findIndex((character) => {
        return character.get('id') === action.payload.characterId
      })

      if (currentCharacterIndex < 0) {
        return state
      }
      const isFavorite = state.getIn(['characters', currentCharacterIndex, 'favorite'])

      return state.setIn(['characters', currentCharacterIndex, 'favorite'], !isFavorite)
    case SET_LOADING: 
      return state.setIn(['loading'], action.payload)
    default:
      return state
  }
}