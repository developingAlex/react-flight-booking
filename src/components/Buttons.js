import React from 'react'

function Button(props) {
  let className = 'btn'

  if (props.primary){
    className += ' btn--primary'
  }
  if (props.magic) {
    className += ' btn--magic'
  }
  return (
    <button className={ className } >
      { props.title }
      
    </button>
  )
}

export default Button
//the modern way of writing module.exports = Button