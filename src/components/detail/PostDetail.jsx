import React, { useEffect, useRef, useState } from 'react'
import THEMEContentForPostDetail from './StyledPostDetail'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { __editAPost } from '../../redux/modules/editAPost'
import DeleteIcon from '@mui/icons-material/Delete'
import { __deleteAPost } from '../../redux/modules/deleteAPost'
import useGetPosts from '../../customHooks/useGetPosts'

const PostDetail = () => {
  useGetPosts()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const postId = useParams().id
  const _title = useRef()
  const _content = useRef()
  const _editButton = useRef()
  const { error, isError, isLoading, posts } = useSelector(
    (state) => state.getPosts
  )
  const [titleValue, setTitleValue] = useState('')
  const [contentValue, setContentValue] = useState('')
  const targetPost = posts.find((post) => post.id === +postId)

  useEffect(() => {
    if (targetPost) {
      setTitleValue(targetPost?.title)
      setContentValue(targetPost?.content)
    }
  }, [targetPost])

  // close button => back to home page
  const closeClickHandler = () => {
    navigate('/')
  }

  // edit button => edit input, textarea
  const editClickHandler = () => {
    if (_editButton.current.innerHTML === 'Edit') {
      alert('이제 수정이 가능합니다.')
      _editButton.current.innerHTML = 'Confirm'
      _title.current.removeAttribute('readOnly')
      _content.current.removeAttribute('readOnly')
    } else {
      if (!titleValue) {
        alert('제목을 입력해주세요')
        return
      }
      if (!contentValue) {
        alert('본문을 입력해주세요')
        return
      }
      alert('수정 완료.')
      _editButton.current.innerHTML = 'Edit'
      _title.current.setAttribute('readOnly', '')
      _content.current.setAttribute('readOnly', '')
      const updatedData = {
        id: targetPost.id,
        newData: {
          title: titleValue,
          content: contentValue,
        },
      }
      dispatch(__editAPost(updatedData))
    }
  }

  // delete icon => delete a post and navigate back to homepage.
  const deleteIconClickHandler = () => {
    alert('삭제되었습니다.')
    dispatch(__deleteAPost(targetPost.id))
    navigate('/')
  }

  return (
    <THEMEContentForPostDetail>
      <div id="detail-header">
        <h1>Detail</h1>
      </div>
      {isLoading ? (
        <div className="detail-alert-container">
          <h1>Loading</h1>
        </div>
      ) : isError ? (
        <div className="detail-alert-container">
          <h1>error</h1>
          <p>{error}</p>
        </div>
      ) : (
        <div id="detail-container">
          <div>
            <DeleteIcon
              id="delete-icon"
              onClick={() => deleteIconClickHandler()}
            />
            <p className="detail-subtitles">Title:</p>
            <input
              className="detail-inputs"
              id="detail-title"
              type="text"
              name="title"
              value={titleValue}
              readOnly
              ref={_title}
              onChange={(e) => setTitleValue(e.target.value)}
            />
          </div>
          <div>
            <p className="detail-subtitles">Content:</p>
            <textarea
              className="detail-inputs"
              id="detail-content"
              name="content"
              value={contentValue}
              readOnly
              ref={_content}
              onChange={(e) => setContentValue(e.target.value)}
            ></textarea>
          </div>
          <div id="detail-date-container">
            <p>
              Author: <span>{targetPost?.author}</span>
            </p>
            <p>
              Date: <span>{targetPost?.date}</span>
            </p>
          </div>
          <div id="detail-button-container">
            <button
              id="detail-edit-button"
              onClick={() => editClickHandler()}
              ref={_editButton}
            >
              Edit
            </button>
            <button id="detail-close-button" onClick={closeClickHandler}>
              Close
            </button>
          </div>
        </div>
      )}
    </THEMEContentForPostDetail>
  )
}

export default PostDetail
