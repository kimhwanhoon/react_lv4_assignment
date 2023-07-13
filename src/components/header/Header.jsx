import React from 'react'
import { styled } from 'styled-components'

const Header = () => {
  return (
    <STYLEDcontainer>
      <h1>Header</h1>
    </STYLEDcontainer>
  )
}

export default Header

const STYLEDcontainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background: linear-gradient(292deg, #141e30, #243b55);
  color: white;
  border-radius: 12px 12px 0px 0px;
  height: 80px;
  width: 100%;
  font-size: 1.5rem;
  transition: all 0.3s ease-in-out 0s;
  min-width: 700px;
  max-width: 1200px;
`
