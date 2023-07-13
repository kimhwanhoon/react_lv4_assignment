import React from 'react'
import ReadPosts from '../components/readPosts/ReadPosts'
import { styled } from 'styled-components'
import Header from '../components/header/Header'
import WriteAPost from '../components/writePost/WriteAPost'

const Home = () => {
  return (
    <>
      <Header />
      <STYLEDcontainer>
        <div id="main-main">
          <WriteAPost />
          <ReadPosts />
        </div>
      </STYLEDcontainer>
    </>
  )
}

export default Home

const STYLEDcontainer = styled.main`
  border-radius: 0 0 12px 12px;
  background: rgb(248, 250, 252);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  width: 100%;
  min-width: 700px;
  max-width: 1200px;

  #main-main {
    /* overflow: auto; */
    /* width: 100%; */
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f8fafc;
    height: 85vh;
  }
`
