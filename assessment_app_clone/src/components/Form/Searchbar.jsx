import React from 'react'

const Searchbar = ({labelText, placeholderText, name, currentValue, onChange}) => {
  return (
    <div>
        {labelText && <label className='font-bold my-5' htmlFor={name}>{labelText}</label>}
        <input type="search" className="focus:border-2 focus:border-white rounded-md inline-block px-4 w-full py-1 font-bold" placeholder={placeholderText || "Type Keyword...."} name={name} value={currentValue} onChange={onChange}/>
    </div>
  )
}

export default Searchbar