import React  from 'react'
import styled from 'styled-components'

const Button = styled.button`
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid aqua;
  border-radius: 3px;
`;


const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) =>
      <div>
        <Button onClick={onIncrement}>
          Increment
        </Button>
        {' '}
        <Button onClick={onDecrement}>
          Decrement
        </Button>
        {' '}
        <Button onClick={onIncrementAsync}>
          Increment after 1 second
        </Button>
      
        <div>
          Clicked: {value} times
        </div>
      </div>



export default Counter