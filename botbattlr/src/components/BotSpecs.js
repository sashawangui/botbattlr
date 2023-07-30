import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import SpecsBot from './SpecsBot';


function BotSpecs({yourBots, setYourBots}) {
  let {botId} = useParams();
  const [bot, setBot] = useState({})
  console.log(botId);

  useEffect(
    () => {
      fetch(`http://localhost:3000/bots/${botId}`)
      .then(res => res.json())
      .then(data => {console.log(data); setBot(data)})
    },[botId]
  )

  return (
    <div className='container'>
        <h1>Bot Specs</h1>
        <SpecsBot bot={bot} setYourBots={setYourBots} yourBots={yourBots}/>
    </div>
  )
}

export default BotSpecs