import React from 'react'

function Button({title, primary, magic}) {
  let className = 'btn'

  if (primary){
    className += ' btn--primary'
  }
  if (magic) {
    className += ' btn--magic'
  }
  return (
    <button className={ className } >
      { title }
      
    </button>
  )
}

export default Button
//the modern way of writing module.exports = Button