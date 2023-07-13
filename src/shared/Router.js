import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Detail from '../pages/Detail'
import { styled } from 'styled-components'

const Router = () => {
  return (
    <STYLEDcontainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="post/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </STYLEDcontainer>
  )
}

export default Router

const STYLEDcontainer = styled.div`
  background: linear-gradient(305deg, #de6161, #2657eb);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  height: 100vh;
`
