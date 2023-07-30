import React from 'react'
import YourBot from './YourBot'

function YourBotArmy({yourBots, setYourBots}) {
  return (
    <div className='container'>
      <h1>My Bots Army</h1>
      <div className='your-bot-army'>
        {yourBots.map(bot => <YourBot bot={bot} setYourBots={setYourBots} yourBots={yourBots} key={bot.id}/>)}
      </div>
    </div>
  )
}

export default YourBotArmy