import { styled } from 'styled-components'

const ThemeContentForWriteAPost = styled.div`
  margin: 2rem;
  #write-container {
    display: flex;
    gap: 1.5rem;
  }
  h1 {
    font-size: 2rem;
    font-weight: 600;
    color: #222;
    text-align: center;
    margin-bottom: 1rem;
  }
  #write-input-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  #write-input-container > * {
    width: 20rem;
    border-radius: 8px;
    border: none;
    box-shadow:
      rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.1) 0px 2px 4px -2px;
    transition: all 0.3s cubic-bezier(0, 0, 0.2, 1) 0s;
    border-radius: 5px;
    padding: 1rem;
    letter-spacing: 0.25px;
  }
  #write-input-container > *:focus {
    outline: #6366f1 2px double;
    transform: scale(1.02);
  }
  textarea {
    height: 100px;
  }
  #write-button-container {
    display: flex;
  }
  button {
    background-color: #6366f1;
    width: 6rem;
    border: none;
    border-radius: 10px;
    box-shadow:
      0 10px 15px -3px rgba(99, 102, 241, 0.5),
      0 4px 6px -4px rgba(99, 102, 241, 0.5);
    color: white;
    font-size: 1.15rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.5s cubic-bezier(0, 0, 0.2, 1) 0s;
  }
  button:hover {
    background-color: #818cf8;
    transform: scale(1.02);
  }
`

export default ThemeContentForWriteAPost
