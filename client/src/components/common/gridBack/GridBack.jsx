import React from 'react'
import Grid from "/src/assets/Grid.png";
const GridBack = () => {
  return (
    <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat "
    style={{ backgroundImage: `url(${Grid})` }}
  />
  )
}

export default GridBack