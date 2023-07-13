import { styled } from 'styled-components'

const THEMEContentForPostDetail = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 500px;
  /* height: 400px; */
  background-color: #f8fafc;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  box-shadow:
    0 4px 10px 0px #c7d2fe,
    0 2px 10px 0px #c7d2fe;
  transition: all 0.3s ease-in-out 0s;

  #detail-header {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--detail_header);
    border-radius: 12px 12px 0px 0px;
    height: 65px;
    width: 100%;
    background: linear-gradient(292deg, #073738, #243b55);
  }
  #detail-header h1 {
    font-size: 1.75rem;
    color: white;
    font-weight: 600;
    letter-spacing: 1px;
  }
  #detail-container {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    background-color: #f8fafc;
    border-radius: 0 0 10px 10px;
  }

  #detail-title {
    border-radius: 4px;
    height: 35px;
    border: none;
    outline: none;
    font-size: 1rem;
    color: #333;
    background-color: white;
    box-shadow:
      0 4px 6px -1px #c7d2fe,
      0 2px 4px -2px #c7d2fe;
  }

  #detail-content {
    border-radius: 4px;
    height: 120px;
    border: none;
    outline: none;
    font-size: 1rem;
    color: #333;
    background-color: white;
    box-shadow:
      0 4px 6px -1px #c7d2fe,
      0 2px 4px -2px #c7d2fe;
  }

  .detail-subtitles {
    font-weight: 600;
    padding-bottom: 0.3rem;
  }

  .detail-inputs {
    width: 350px;
    padding: 1rem;
  }
  #detail-date-container {
    display: flex;
    justify-content: space-between;
    width: 90%;
  }
  #detail-date-container p {
    font-size: 0.95rem;
    font-weight: 600;
    letter-spacing: 0.15px;
  }
  #detail-date-container span {
    font-weight: 500;
  }

  #detail-button-container {
    display: flex;
    width: 90%;
    justify-content: space-evenly;
    gap: 2rem;
  }
  #detail-button-container > * {
    width: 100%;
    height: 35px;
    box-shadow:
      0 4px 6px -1px #c7d2fe,
      0 2px 4px -2px #c7d2fe;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 1.05rem;
    letter-spacing: 0.75px;
    transition: all 0.3s cubic-bezier(0, 0, 0.2, 1) 0s;
  }

  #detail-edit-button {
    background-color: #3c3e93;
  }
  #detail-close-button {
    background-color: #13142f;
  }
`
export default THEMEContentForPostDetail
