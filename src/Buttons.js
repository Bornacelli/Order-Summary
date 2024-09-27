import styled from 'styled-components';

export const ProceedButton = styled.button`
  background-color: hsl(245, 75%, 52%);
  color: white;
  border: none;
  padding: 15px;
  width: 90%;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  margin: auto;
  font-size: 1em;
  display: flex;
  justify-content: center;


  &:hover {
    background-color: hsl(245, 75%, 65%);
  }
`;

export const CancelButton = styled.button`
  background-color: transparent;
  color: hsl(224, 23%, 55%);
  border: none;
  padding: 40px;
  width: 90%;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1em;
  display: flex;
  justify-content: center;


  &:hover {
    color: hsl(223, 47%, 23%);
  }
`;
