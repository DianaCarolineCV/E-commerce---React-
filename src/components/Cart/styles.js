import styled from "styled-components";

export const HeadProducts = styled.section `
    width: 100%;
    height: 4.0625rem;
    background: var(--color-primary);
    border-radius: 0.3125rem 0.3125rem 0rem 0rem;
    padding: 1.375rem 0 0 1.25rem;

    color: var(--color-white);
    font-weight: 700;
    font-size: 1.125rem;

    @media (min-width: 800px) {
    width: 17rem;
    }
`

export const MainNoProducts = styled.section `
    width: 100%;
    height: 9.875rem;
    background: var(--color-grey-4);
    border-radius: 0rem 0rem 0.3125rem 0.3125rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3.125rem 0.625rem;


    h2{
        font-size: 1.125rem;
        color: var(--color-grey-1);
        margin-bottom: 0.3125rem;
    }

    p{
        font-size: 0.875rem;
        text-align: center;
        color: var(--color-grey-2);
    }
    
    @media (min-width: 800px) {
        width: 17rem;
    }
`

export const MainProducts = styled.div `
    
    width: 100%;
    max-height: 21.875rem;
    overflow: auto;
    padding: 1.25rem 0.625rem;
    max-height: 21.875rem;
    border-radius: 0rem 0rem 0.3125rem 0.3125rem;
    background: var(--color-grey-4);
    
    div{
        height: 5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

     section{
            width: 6.25rem;
        }
    }

    img{
        width: 4.375rem;
        height: 4.375rem;
        background-color: var(--color-grey-3);
    }

    h2{
        font-weight: 700;
        font-size: 0.875rem;
        color: var(--color-grey-1); 
        margin-bottom: 0.9375rem;
    }

    p{ 
        color: var(--color-grey-2); 
        font-size: 0.75rem;   
    }

    button{
        color: var(--color-grey-2);  
        font-size: 0.75rem;
    }

`


export const Total = styled.section `
    height: 7.625rem;
    width: 100%;
    padding: 1.25rem 0.625rem;
    border-top: 0.0625rem solid var(--color-grey-3);
    background: var(--color-grey-4);
    display: flex;
    flex-direction: column;
    justify-content: center;

    p{
        font-size: 0.875rem; 
        color: var(--color-grey-1); 
    }

    span{
        font-size: 0.875rem;
        color: var(--color-grey-2); 
    }

    div{
        display: flex;
        justify-content: space-between;
        margin-bottom: 1.375rem;
    }

    button{
        background: var(--color-grey-3);
        border: 0.125rem solid var(--color-grey-3);
        border-radius: 0.5rem;
        height: 3.75rem;
        font-size: 0.875rem;
        color: var(--color-grey-2)
    }
`