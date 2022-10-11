import styled from "styled-components";

export const List = styled.ul `
    width: 100%;   
    display: flex; 
    gap: 1.25rem;
    overflow-x: scroll;
   
    @media (min-width: 800px) {
        flex-wrap: wrap;
    }
`