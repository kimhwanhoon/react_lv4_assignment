## npm start로 실행 가능

다음 코드로 json-server 실행

```js
json-server --watch db.json --port 4000
```

## requirements

- json-server
- redux
- react-redux
- react-router-dom
- axios
- @reduxjs/toolkitre
- styled-components
- redux-devtools-extension
- moment
- @mui/icons-material @mui/material @emotion/styled @emotion/react
- dotenv

---

## 문제점

아직도 이유를 찾지 못 함.
=> .env로 만든 키와 벨류가 .js에서 `process.env.-`로 해도 `undefined`가 반환 됨.
<br>분석: 개인적인 컴퓨터 문제일수도...
