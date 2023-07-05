import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Col } from 'antd'
import Searcher from './components/Searcher'
import CharacterList from './components/CharacterList'
import logo from './statics/Rick_and_Morty.svg'
import './App.css'
import { getCharacters } from './api'
import { setCharacters as setCharactersActions } from './actions'

function App({characters, setCharacters}) {
  useEffect(() => {
    const chars = async() => { 
      let list = await getCharacters() 
      setCharacters(list.results)
    } 
    chars()
  }, [])

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

const mapStateToProps = (state) => ({
  characters: state.characters
})

const mapDispatchToProps = (dispatch) => ({
  setCharacters: (value) => dispatch(setCharactersActions(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
