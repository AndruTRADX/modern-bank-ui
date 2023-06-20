import React from 'react'

const Button = ({ styles, message }: { styles?: string; message: string }) => {
  return (
    <button
      type="button"
      className={`${styles} py-4 px-6 bg-blue-gradient font-poppins text-[18px] text-primary outline-none rounded-[10px] font-medium`}
    >
      {message}
    </button>
  )
}

export default Button
