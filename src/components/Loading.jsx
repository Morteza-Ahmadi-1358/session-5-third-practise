import React from 'react'

const Loading = () => {
  return (
    <div className='w-50 my-5 py-5 mx-auto'>
        <span className='w-100 mt-5 mb-3 pt-5 d-block text-center text-info'>در حال بارگذاری اطلاعات ...</span>
        <i className='d-block mx-auto text-center spinner-border text-danger'></i>
        <span className='w-100 mt-3 d-block text-center text-info'>منتظر بمانید</span>
    </div>
  )
}

export default Loading