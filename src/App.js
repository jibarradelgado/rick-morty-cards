import { Col } from 'antd'
import Searcher from './components/Searcher'
import CharacterList from './components/CharacterList'
import logo from './statics/Rick_and_Morty.svg'
import './App.css'
import { useEffect, useState } from 'react'
import { getCharacters } from './api'

function App() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const chars = async() => { 
      let list = await getCharacters() 
      setCharacters(list.results)
    } 
    chars()
  }, [])

  useEffect(() => {
    console.log(characters)
  }, [characters])

  return (
    <div className="App">
    <Col span={8} offset={8}>
      <img src={logo} alt='Rick and Morty logo' />
    </Col>
    <Col span={8} offset={8}>
      <Searcher />
    </Col>
    <CharacterList characters={characters}/>
    </div>
  )
}

export default App
