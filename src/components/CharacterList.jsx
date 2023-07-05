import CharacterCard from "./CharacterCard"

const CharacterList = ({characters}) => {
  return (
    <div className="CharacterList">
      {characters.map((character) => {
        return <CharacterCard key={character.id} character={character} />
      })}
    </div>
  )
}

CharacterList.defaultProps = {
  characters: Array(10).fill('')
}

export default CharacterList