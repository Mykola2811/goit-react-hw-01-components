import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-left: 0;
    margin-top: 0;
    width: 100%;
    max-width: 400px;
    
    
`;
export const Ul = styled.ul`
    text-align: center;
    
    display: inline-flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    list-style: none;
    gap: 20px;
    width: 100%;
    
`;
export const Li = styled.li`
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 700;

    gap: 20px;
    border-radius: 8px;
    padding: 10px 20px;
    box-shadow: 1px 4px 3px rgb(0 0 0 / 20%), 0 1px 1px rgb(0 0 0 / 14%), 1px 4px 3px rgb(0 0 0 / 12%);
    background-color: #fff;
    
`;
export const Span = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;

`;
export const Img = styled.img`
    background-color: rgb(176,196,222,0.5);
    border-radius: 8px;
`;