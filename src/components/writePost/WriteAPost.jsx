import React, { useState } from 'react'
import ThemeContentForWriteAPost from './StyledWriteAPost'
import { useDispatch } from 'react-redux'
import { __writeAPost } from '../../redux/modules/writeAPost'
import { __getPosts } from '../../redux/modules/getPosts'
import moment from 'moment/moment'

const WriteAPost = () => {
  const dispatch = useDispatch()
  // const titleInput = useRef()
  // const postTextarea = useRef()
  const [titleVal, setTitleVal] = useState('')
  const [contentVal, setContentVal] = useState('')

  const postClickHandler = () => {
    if (!titleVal) {
      alert('제목을 입력해주세요')
      return
    }
    if (!contentVal) {
      alert('본문을 입력해주세요')
      return
    }
    const newData = {
      author: 'Hwanhoon Kim',
      content: contentVal,
      date: dateFormatter(),
      title: titleVal,
    }
    dispatch(__writeAPost(newData))
    dispatch(__getPosts())
    setContentVal('')
    setTitleVal('')
    alert('포스트 완료!')
  }

  return (
    <ThemeContentForWriteAPost>
      <h1>Write a post</h1>
      <div id="write-container">
        <div id="write-input-container">
          <input
            type="text"
            placeholder="Title"
            value={titleVal}
            onChange={(e) => setTitleVal(e.target.value)}
          />
          <textarea
            placeholder="Write a post."
            value={contentVal}
            onChange={(e) => setContentVal(e.target.value)}
          ></textarea>
        </div>
        <div id="write-button-container">
          {titleVal.length === 0 || contentVal.length === 0 ? (
            <button disabled>Post</button>
          ) : (
            <button onClick={() => postClickHandler()}>Post</button>
          )}
        </div>
      </div>
    </ThemeContentForWriteAPost>
  )
}

export default WriteAPost

const dateFormatter = () => {
  return moment().format('MMMM Do YYYY, h:mm a')
}
