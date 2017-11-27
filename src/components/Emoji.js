import React from 'react'

function Emoji ( {
  sad = false,
  cat = false
}) {
    let text = '🐱'
    if (cat) {
      if (sad){
        text = '😿'
      }
      else{
        text = '😺'
      }
    }
    else{
      if (sad){
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