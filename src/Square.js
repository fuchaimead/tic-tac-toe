import React, { useState } from 'react';

const Square = (props) => {
  const [value, setValue] = useState(null);
  console.log('value', value)
  const handleClick = () => {
    if(value === null && value === 'X') {
      setValue('X') 
    } else {
      setValue('O')
    }
  }
  return (
  <div>{props.value}</div>
  )

}

export default Square;