import React from 'react'
import {useNavigate} from "react-router-dom";


function Bot({bot}) {
  let navigate = useNavigate();

 

  function displaySpecs(){
    navigate(`/bot-specs/${bot.id}`);

  }

  return (
    <div className='bot' onClick={displaySpecs}>
      <h3>{bot.name}</h3>
      <img src={bot.avatar_url} alt='a bot' />
    </div>
  )
}

export default Bot