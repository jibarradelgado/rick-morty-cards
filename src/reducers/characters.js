import { SET_CHARACTERS, SET_FAVORITE, SET_LOADING } from "../actions/types"

const initialState = {
  characters: [],
  loading: false,
}

export const charactersReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_CHARACTERS: 
      return { ...state, characters: action.payload}
    case SET_FAVORITE: 
      const newCharactersList = [...state.characters]
      const currentCharacterIndex = newCharactersList.findIndex((character) => {
        return character.id === action.payload.characterId
      })

      if (currentCharacterIndex < 0) {
        return state
      }
      
      newCharactersList[currentCharacterIndex].favorite = !newCharactersList[currentCharacterIndex].favorite
      return { ...state, characters: newCharactersList }
    case SET_LOADING: 
      return {...state, loading: action.payload}
    default:
      return state
  }
}