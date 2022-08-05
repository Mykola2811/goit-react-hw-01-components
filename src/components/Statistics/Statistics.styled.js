import styled from 'styled-components';

export const Wrapper = styled.section`
    text-align: center;
    border: 1px solid #000;
    border-radius: 8px;
    display: inline-flex;
    flex-direction: column;
    margin-bottom: 20px;
    width: 100%;
    max-width: 400px;
    
`;
export const Label = styled.span`
  color: slategrey;
  font-size: 20px;
`;
export const List = styled.ul`
  font-size: 20px;
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;
export const Li = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #000;
  width: 100%;
  height: auto;
  gap: 5px;
`;
export const H2 = styled.span`
  color: slategrey;
  font-size: 35px;
  padding: 40px 0;
  

`;