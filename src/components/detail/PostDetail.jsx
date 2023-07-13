import React from 'react'
import THEMEContentForPostDetail from './StyledPostDetail'

const PostDetail = () => {
  return (
    <THEMEContentForPostDetail>
      <div id="detail-header">
        <h1>Detail</h1>
      </div>
      <div id="detail-container">
        <div>
          <p className="detail-subtitles">Title:</p>
          <input
            className="detail-inputs"
            id="detail-title"
            type="text"
            name="title"
          />
        </div>
        <div>
          <p className="detail-subtitles">Content:</p>
          <textarea
            className="detail-inputs"
            id="detail-content"
            name="content"
          ></textarea>
        </div>
        <div id="detail-date-container">
          <p>
            Author: <span>to be updated</span>
          </p>
          <p>
            Date: <span>to be updated</span>
          </p>
        </div>
        <div id="detail-button-container">
          <button id="detail-edit-button">Edit</button>
          <button id="detail-close-button">Close</button>
        </div>
      </div>
    </THEMEContentForPostDetail>
  )
}

export default PostDetail
