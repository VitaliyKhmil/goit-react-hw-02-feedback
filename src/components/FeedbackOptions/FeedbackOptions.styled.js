import styled from 'styled-components';

export const Button = styled.button`
  width: 100px;
  height: 50px;
  margin: 15px 0;
  margin-right: 10px;
  margin-left: 10px;
  border: none;
  border-radius: 0.5rem;
  text-align: center;
  text-transform: uppercase;
  font-size: small;
  font-weight: bold;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px 0px;
  cursor: pointer;
  :hover {
    color: #ff9a00;
  }
  :active {
    background-color: #dfdfde;
  }
`;
