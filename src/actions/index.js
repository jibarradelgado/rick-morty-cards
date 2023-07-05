import { getCharacterWithLocation } from "../api";
import { SET_CHARACTERS } from "./types";

export const setCharacters = (payload) => ({
  type: SET_CHARACTERS,
  payload
})

export const getCharactersWithLocation = 
  (characters = []) => 
  async (dispatch) => {
    const charactersWithLocation = await Promise.all(
      characters.map((character) => getCharacterWithLocation(character))
    )

    dispatch(setCharacters(charactersWithLocation))
  }