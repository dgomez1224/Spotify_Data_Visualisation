import styled from 'styled-components'

const LoginButton = styled.button`
  background-color: black;
  border: 2px solid green;
  border-radius: 6px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  font-size: 20px;
  &:hover {
    background-color: grey;
    font-size: 22px;
  }
  `
export default LoginButton;