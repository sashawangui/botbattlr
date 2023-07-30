import React from 'react'

function YourBot({bot, yourBots, setYourBots}) {

    function releaseBot(){
        setYourBots(yourBots.filter(botf => botf.id!== bot.id));
        
    }
    function deleteForever(){
      releaseBot();
      fetch(`http://localhost:3000/bots/${bot.id}`, {
          method : "DELETE"
        })
    }
  return (
    <div className='container'>
       <div className='bot'>
        <h2>{bot.name}</h2>
        <img src={bot.avatar_url} alt='a bot'/>
        <h3>Health : {bot.health}</h3>
        <h3>Damage : {bot.damage}</h3>
        <h3>Armor : {bot.armor}</h3>
        <h3>Title : {bot.bot_class}</h3>
        <button className='btn btn-brown' onClick={releaseBot}>Discharge bot</button>
        <button className='btn-danger' onClick={deleteForever}>X</button>
     </div>
    </div>
   
  )
}

export default YourBot