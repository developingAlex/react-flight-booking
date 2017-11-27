import React from 'react'

function Button({children, primary, magic, href}) {
  let className = 'btn'

  if (primary){
    className += ' btn--primary'
  }
  if (magic) {
    className += ' btn--magic'
  }

  const renderLink = !!href

  if (renderLink) {
    return(
      <a href={ href } className={ className }>
        { children }
      </a>
    )
  }
  // in the below line ...= { className } > : the curly braces is the syntax analogous to <%= %> in .erb files.
  return (
    <button className={ className } >
      { children }
      
    </button>
  )
}

export default Button
//the modern way of writing module.exports = Button