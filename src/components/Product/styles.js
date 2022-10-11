import styled from "styled-components";

export const ListProducts = styled.li `
    width: 18rem;
    height: 21.8125rem;
    border: 0.125rem solid var(--color-grey-3) ;
    border-radius: 0.3125rem;

    div {
        background-color: var(--color-grey-4);
        width: 100%; 
        display: flex ;
        justify-content: center;
    }

    img {
        width: 9.875rem;
        height: 9.875rem;
    }

    section {
        padding: 1.625rem 1.375rem 0 1.625rem;
        display: flex;
        flex-direction: column;
        height: 10rem;
        justify-content: space-between;    
    }

    h2{
        color: var(--color-grey-1);
        font-weight: 700;
        font-size: 0.95rem;
    }

    p{
        color: var(--color-grey-1);
        font-size: 0.75rem;
    }
    
    h3{
        color: var(--color-primary);
        font-size: 0.875rem;
    }

    button{
        width: 6.625rem;
        height: 2.5rem;
        padding: 0rem 1.25rem;
        background-color: var(--color-primary);
        border: 0.125rem solid var(--color-primary);
        border-radius: 0.5rem;
        color: var(--color-white)
    }

    @media (min-width: 800px) {
        width: 30%;
    }
`