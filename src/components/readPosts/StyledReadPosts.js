import { styled } from 'styled-components'

const THEMEContentForReadPosts = styled.div`
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
    font-weight: 600;
    color: #222;
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
export default THEMEContentForReadPosts
