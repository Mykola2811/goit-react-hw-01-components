import styled from 'styled-components';

export const Wrapper = styled.div`
    text-align: center;
    border-radius: 8px;
    flex-direction: column;
    margin-left: 0;
    margin-bottom: 20px;
    max-width: 400px;
    box-shadow: 1px 4px 3px rgb(0 0 0 / 20%), 0 1px 1px rgb(0 0 0 / 14%), 1px 4px 3px rgb(0 0 0 / 12%);
    
    
`;

export const Avatar = styled.img`
    border-radius: 100px;
    background-color: rgb(176,196,222,0.5);
    width: 45%;
`;

export const Stats = styled.ul`
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    border-radius:  0 0 8px 8px;
    background-color: #f3f6f9;
    
    
`;

export const StatsLi = styled.li`
    display: flex;
    flex-direction: column;
    gap: 5px;
    
    width: 33%;
    height: auto;
    padding: 10px 0;
    


`;

export const Description = styled.div`
    background-color: #fff;
    padding: 20px 0;
    border: 1px;
    border-radius: 8px 8px 0 0 ;
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