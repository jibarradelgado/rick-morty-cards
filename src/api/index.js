import axios from "axios"

export const getCharacters = async () => {
  try {
    const { data } = await axios.get('https://rickandmortyapi.com/api/character')
    return data
  } catch (error) {
    console.error('There was an error: ', error)
  }
}

export const getCharacterWithLocation = (character) => {
  return axios.get(character.location.url)
    .then(res => {
      character.location = res.data
      return character
    })
    .catch((err) => console.log(err))
}