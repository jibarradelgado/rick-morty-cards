import axios from "axios"

export const getCharacters = async () => {
  try {
    const { data } = await axios.get('https://rickandmortyapi.com/api/character')
    return data
  } catch (error) {
    console.error('There was an error: ', error)
  }
}