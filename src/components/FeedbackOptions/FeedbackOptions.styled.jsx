import styled from 'styled-components';

export const OptionsList = styled.div`
list-style: none;
display: flex;
gap: 15px;
`;

export const Button = styled.button`
  width: 90px;
  padding: 5px;
  font-size: 18px;
  font-weight: 500;
  border-radius: 6px;

  border: 1px solid rgb(177, 177, 177);
  cursor: pointer;

  
  background-color: rgb(214, 207, 207);

  &:first-child {
    background-color: rgb(72, 240, 86);
  }
  
  &:last-child {
    background-color: rgb(241, 76, 76);
  }

  :hover {
    background-color: #4f5c7d;
    box-shadow: 0 0 10px #c6cccced;
}
`;


