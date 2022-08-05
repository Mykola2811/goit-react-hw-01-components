import styled from 'styled-components';

export const Wrapper = styled.div`
    text-align: center;
    border: 1px solid #000;
    border-radius: 8px;
    display: inline-flex;
    flex-direction: column;
    margin-left: 20px;
    margin-top: 20px;
    
`;

export const Avatar = styled.img`
    border-radius: 100px;
    width: 170px;
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
    padding: 40px 10px;
    width: 30%;
    background: floralwhite;
    background: gainsboro;

`;

export const Description = styled.div`
    padding: 40px 110px;

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