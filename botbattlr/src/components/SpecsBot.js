import React from 'react'
import {useNavigate} from "react-router-dom";

function SpecsBot({bot, yourBots, setYourBots}) {
    let navigate = useNavigate();

    function enlistBot(){
        if(yourBots.find(yourBot => yourBot.id === bot.id)){
          alert("You can only enlist a bot once")
        }else{
          setYourBots([...yourBots,bot]);
          navigate('/my-bots')
        }
        
      }
    function goBack(){
      navigate(-1);
    }

  return (
    
      <div className='container'>
        <h2>{bot.name}</h2>
        <img src={bot.avatar_url} alt='a bot' />
        <h3>Title : {bot.bot_class}</h3>
        <h3>Health : {bot.health}</h3>
        <h3>Damage : {bot.damage}</h3>
        <h3>Armor : {bot.armor}</h3>
        <button className='enlist-btn' onClick={enlistBot}>Enlist bot</button>     
       <br />
      <button className='btn' onClick={goBack}>Go back</button>
      </div>

  
  )
}

export default SpecsBot