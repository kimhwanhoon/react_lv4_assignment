import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { detailDataFetcher } from '../../redux/modules/detailDataFetch'
import { useNavigate } from 'react-router-dom'
import THEMEContentForReadPosts from './StyledReadPosts'
import useGetPosts from '../../customHooks/useGetPosts'

const ReadPosts = () => {
  useGetPosts()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { error, isError, isLoading, posts } = useSelector((state) => {
    return state.getPosts
  })

  const openDetailModal = (e, post) => {
    navigate(`post/${post.id}`)
    const _id = e.currentTarget.getAttribute('_id')
    const targetPost = posts.filter((post) => post.id === +_id)
    dispatch(detailDataFetcher(...targetPost))
  }
  return (
    <THEMEContentForReadPosts>
      <div>
        <p id="posts-title">Posts</p>
      </div>
      <div id="posts-container">
        {isLoading ? (
          <h1>Loading</h1>
        ) : isError ? (
          <p>error occured! error: {error}</p>
        ) : (
          posts.map((post) => {
            return (
              <div key={post.id}>
                <div
                  className="post-container"
                  _id={post.id}
                  onClick={(e) => openDetailModal(e, post)}
                >
                  <h1 className="post-title post-components">{post.title}</h1>
                  <p className="post-content post-components">{post.content}</p>
                  <p className="post-date post-components">Date: {post.date}</p>
                  <p className="post-author post-components">
                    Author: <span className="author-name">{post.author}</span>
                  </p>
                </div>
                {/* empty-div 한 이유: overflow때문에 margin bottom이 안 먹혀서 맨 밑의 카드가 보기 흉하게 여백없이 밑과 닿아있기에 임시 방편으로 empty-div를 만듬 */}
                <div className="empty-div">&nbsp;</div>
              </div>
            )
          })
        )}
      </div>
    </THEMEContentForReadPosts>
  )
}

export default ReadPosts
