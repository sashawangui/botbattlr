import React from 'react'
import Bot from './Bot'

function BotCollection({bots, setYourBots, yourBots, setFilteredBots, filteredBots}) {

  function handleChange(event){
    if(event.target.value === "All"){
      setFilteredBots(bots);

    }else{
      setFilteredBots(bots.filter(bot => bot.bot_class === event.target.value));
      console.log(event.target.value);
    }
   
  }
  return (
    <div className='container'>
      <h1>Bots Collection</h1>
      <br />
      <select name='role' onChange={handleChange} >
        <option>Select bots type</option>
        <option value="All">All Bots</option>
        <option value="Support">Support bots</option>
        <option value="Medic">Medic bots</option>
        <option value="Assault">Assault bots</option>
        <option value="Defender">Defender bots</option>
        <option value="Captain">Captain bots</option>
        <option value="Witch">Witch bots</option>
      </select>
      <br />
      <br />
      <h2>(Select bots depending on their type in the dropdown above)</h2>
      <br />
  
      <div className='bots-collection'>
        {filteredBots.map(bot => <Bot bot={bot} setYourBots={setYourBots} yourBots={yourBots} key={bot.id}/>)}
      </div>
      
    </div>
  )
}

export default BotCollection