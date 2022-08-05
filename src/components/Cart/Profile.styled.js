import styled from 'styled-components';

export const Wrapper = styled.div`
    text-align: center;
    border: 1px solid #000;
    border-radius: 8px;
    flex-direction: column;
    margin-left: 0;
    margin-bottom: 20px;
    max-width: 400px;
    
`;

export const Avatar = styled.img`
    border-radius: 100px;
    width: 45%;
    border: 1px solid #000;
`;

export const Stats = styled.ul`
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    
`;

export const StatsLi = styled.li`
    display: flex;
    flex-direction: column;
    gap: 5px;
    border: 1px solid #000;
    width: 33%;
    height: auto;
    padding: 10px 0;
    background: floralwhite;
    background: gainsboro;

`;

export const Description = styled.div`
    padding-top: 20px;
`;
export const Name = styled.p`
   margin: 35px 0 0 0;
   font-size: 30px;
   font-weight: 700;

`;
export const Tag = styled.p`
   font-size: 20px;
   color: slategrey;
   font-weight: 500;

`;
export const Location = styled.p`
   font-size: 20px;
   font-weight: 700;
   color: slategrey;
`;
export const Label = styled.span`
  color: slategrey;
  font-size: 20px;
`;
export const Quantity = styled.span`
   font-size: 25px;
   font-weight: 700;
   color: #000;
`;