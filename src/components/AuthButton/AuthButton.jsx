import React from 'react';
import "./AuthButton.css"

function AuthButton({ textButton }) {
  return (
    <button className={"authbutton hover-effect"}>{textButton}</button>
  )
}

export default AuthButton;