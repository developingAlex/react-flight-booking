import React from 'react'

function Emoji ( {
  emotion = 'sad',
  cat = false
}) {
    let text = '🐱'
    if (cat) {
      if (emotion === 'sad'){
        text = '😿'
      } 
      else{
        text = '😺'
      }
    }
    else{
      if (emotion === 'sad'){
        text = '😢'
      }
      else{
        text = '🙂'
      }
    }
  
    return(
      <span>
        { text }
      </span>
    )
  } 

export default Emoji