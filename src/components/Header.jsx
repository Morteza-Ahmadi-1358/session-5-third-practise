import React from 'react'

const Header = (props) => {
  return (
    <div className='bg-danger text-white d-flex justify-content-between py-5 px-2 mb-5'>
      <a href='https://www.tahlildadeh.com/' target='_blank' className='text-white text-decoration-none'>تحلیل‌داده</a>
      {props.isLoggedIn && <h6 onClick={props.onLogout} className='btn_logout'>خروج</h6>}
    </div>
  )
}

export default Header