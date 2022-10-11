import styled from "styled-components";

export const Container = styled.div `
    padding: 1rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:1rem;
    
    @media (min-width: 800px) {
        padding: 2rem; 
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: unset;
    }   

`
export const Header = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap:1rem;
    align-items: center;
    height: 8rem;
    padding: 1rem;
    background-color: var(--color-grey-4);
 
    form{
        background-color: var(--color-white);
        height: 3.75rem;
        padding: 0 0.625rem 0 0.9375rem;
        border: 0.125rem solid var(--color-grey-3);
        border-radius: 0.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;

        @media (min-width: 800px) {
            width: unset;
        }   
    }

    input{
        width: 60%;

        @media (min-width: 800px) {
            width: unset;
        } 
    }

    input::placeholder{
        height: 70%;
        color: var(--color-grey-3);
   
    }

    button{
        background-color : var(--color-primary);
        border: 0.125rem solid var(--color-primary);
        border-radius: 0.5rem;
        height: 70%;
        color: var(--color-white);

        @media (min-width: 800px) {
            padding: 0rem 1.25rem;
        } 
    }

    @media (min-width: 800px) {
        display: flex;
        flex-direction: row;
        height: 5rem;
        padding: 2rem 6rem;
        gap:unset;

}
`

export const Loading = styled.div `
    width: 100%; 
    min-height: 100vh;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    
    p{
        width: 3.75rem;
        height: 3.75rem;
        background-color: transparent;
        display: block;
        border:  0.5rem solid var(--color-primary);
        border-bottom: 0.5rem solid transparent;
        border-radius: 50%;
    }

    animation: loading 1s ease-in-out infinite;

    @keyframes loading{
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
        
    }

`