import React from 'react';
import "./AuthInput.css"

function AuthInput({label,name,id,type,onChange,placeholder,minLength,maxLength,pattern,value,errMessage}) {
  return (
    <div className="authinput">
      <label className="authinput__label" htmlFor={id}>
        {label}
      </label>
      <input
        name={name}
        id={id}
        type={type}
        className="authinput__input"
        onChange={onChange}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        required
        value={value}
      ></input>
      <span className='authinput__error'>{errMessage}</span>
    </div>
  )
}

export default AuthInput;