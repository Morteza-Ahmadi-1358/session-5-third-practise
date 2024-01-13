import React from 'react'

const Button = (props) => {
  return (
    <div className='w-100 my-3'>
      <button type="submit" disabled = {props.isDisabled} className='w-50 d-block mx-auto btn btn-outline-danger'>ورود</button>
    </div>
  )
}

export default Button