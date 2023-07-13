import React, { useRef } from 'react'
import ThemeContentForWriteAPost from './StyledWriteAPost'
import { useDispatch } from 'react-redux'
import { __writeAPost } from '../../redux/modules/writeAPost'
import { __getPosts } from '../../redux/modules/getPosts'
import moment from 'moment/moment'

const WriteAPost = () => {
  const dispatch = useDispatch()
  const titleInput = useRef()
  const postTextarea = useRef()

  const postClickHandler = () => {
    const newData = {
      author: 'Hwanhoon Kim',
      content: titleInput.current.value,
      date: dateFormatter(),
      title: postTextarea.current.value,
    }
    dispatch(__writeAPost(newData))
    dispatch(__getPosts())
  }

  return (
    <ThemeContentForWriteAPost>
      <h1>Write a post</h1>
      <div id="write-container">
        <div id="write-input-container">
          <input ref={titleInput} type="text" placeholder="Title" />
          <textarea ref={postTextarea} placeholder="Write a post."></textarea>
        </div>
        <div id="write-button-container">
          <button onClick={() => postClickHandler()}>Post</button>
        </div>
      </div>
    </ThemeContentForWriteAPost>
  )
}

export default WriteAPost

const dateFormatter = () => {
  return moment().format('MMMM Do YYYY, h:mm a')
}
