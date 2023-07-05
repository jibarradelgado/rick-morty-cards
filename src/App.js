import { useEffect } from 'react'
import { Col, Spin } from 'antd'
import Searcher from './components/Searcher'
import CharacterList from './components/CharacterList'
import logo from './statics/Rick_and_Morty.svg'
import './App.css'
import { getCharacters } from './api'
import { getCharactersWithLocation, setCharacters, setLoading } from './actions'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const characters = useSelector(state => state.get('characters')).toJS()
  const loading = useSelector(state => state.get('loading'))
  const dispatch = useDispatch()

  useEffect(() => {
    const chars = async() => { 
      dispatch(setLoading(true))
      let list = await getCharacters() 
      dispatch(getCharactersWithLocation(list.results))
      dispatch(setLoading(false))
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
    {
      loading ? (<Col offset={12}>
      <Spin spinning size='large' />
    </Col>) : 
    <CharacterList characters={characters}/>
    }
    </div>
  )
}

export default App
