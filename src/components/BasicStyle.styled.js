import styled from 'styled-components';

export const Box = styled.div`
    display: flex;
    width: 100%;
    padding: ${p => p.theme.space[4]}px;
    flex-direction: column;
    align-items: center;
    background-color: ${p => p.theme.colors.mainBackground};
    
`;