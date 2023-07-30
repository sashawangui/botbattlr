import React, { useEffect, useState } from 'react'
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
import NavBar from './NavBar'
import BotSpecs from "./BotSpecs"

import {Routes, Route} from "react-router-dom"

function App() {

  const [bots, setBots] = useState([]);
  const [yourBots, setYourBots] = useState([]);
  const [filteredBots, setFilteredBots] = useState([])
  

  useEffect(
    () => {
      fetch(`http://localhost:3000/bots`)
      .then(res => res.json())
      .then(data =>  setBots([...data]))
      .catch(err => alert("Kindly ensure you are fetching data from port 3000"))
    },[]
  )

  return (
    <div>

      <NavBar />
      
      <Routes> 

        <Route exact path='/' element={
          <BotCollection bots={bots} setYourBots={setYourBots} yourBots={yourBots} filteredBots={filteredBots} setFilteredBots={setFilteredBots}/>
        }/>

        <Route exact path='/bots-collection' element={
          <BotCollection bots={bots} setYourBots={setYourBots} yourBots={yourBots} filteredBots={filteredBots} setFilteredBots={setFilteredBots}/>
        } />   

        <Route exact path="/my-bots" element={
          <YourBotArmy yourBots={yourBots} setYourBots={setYourBots}/>
        } />
      
      <Route exact path={`/bot-specs/:botId`} element={
        <BotSpecs yourBots={yourBots} setYourBots={setYourBots}/>
      }/>

      </Routes>
      
      
    </div>
  )
}

export default App