import { Card } from "antd"
import { useDispatch } from "react-redux"
import StarButton from "./StarButton"
import Meta from "antd/es/card/Meta"
import './CharacterList.css'
import { setFavorite } from "../actions"

const CharacterCard = ({character, favorite}) => {
  const dispatch = useDispatch()
  const description = `Species: ${character.species}, Gender: ${character.gender}`

  const handleOnFavorite = () => {
    dispatch(setFavorite({characterId: character.id}))
  }

  return (
    <Card 
      title={character.name} 
      cover={<img src={character.image} alt={character.name} />} 
      extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
      >
      <Meta description={description} />
    </Card>
  )
  
}

export default CharacterCard