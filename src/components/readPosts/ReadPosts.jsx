import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from 'styled-components'
import { __getPosts } from '../../redux/modules/getPosts'
import { detailDataFetcher } from '../../redux/modules/detailDataFetch'
import { useNavigate } from 'react-router-dom'

const ReadPosts = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(__getPosts())
  }, [dispatch])

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
    <STYLEDcontainer>
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
    </STYLEDcontainer>
  )
}

export default ReadPosts

const STYLEDcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  #posts-container {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 400px;
  }
  #posts-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  .post-container {
    width: 500px;
    display: flex;
    flex-direction: column;
    background-color: white;
    margin-bottom: 1.25rem;
    transition: 0.3s cubic-bezier(0, 0, 0.2, 1);
    border-radius: 8px;
    box-shadow:
      0 4px 6px -1px #c7d2fe,
      0 2px 4px -2px #c7d2fe;
    cursor: pointer;
  }
  .post-components {
    padding: 0.5rem 1rem;
  }
  .post-title {
    font-size: 1.5rem;
    padding: 1rem 1rem 0 1rem;
  }
  .post-content {
    padding: 1rem;
    line-height: 1.3;
    text-align: justify;
  }
  .post-date {
    font-size: 0.875rem;
    text-align: right;
  }
  .post-author {
    font-size: 0.875rem;
    text-align: right;
  }
  .author-name {
    font-weight: 600;
  }
`
