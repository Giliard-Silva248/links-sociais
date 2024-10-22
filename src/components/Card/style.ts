import styled from "styled-components";


export const Container = styled.div`
    border-radius:1rem;

    width: 22rem;
    height: 34rem;
    padding: 2rem;

    background: hsl(0, 0%, 12%);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    @media  (max-width: 361px){
        width: 20rem;
        padding: 1rem;
    }
`

export const img = styled.img`
    width: 6.5rem;
    border-radius: 50%;
`
export const divInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .3rem;
`
export const name = styled.h3`
    font-weight: 700;

`
export const address = styled.p`
    color:  hsl(75, 94%, 57%);
    font-weight: 400;
    font-size: 14px;
    `
export const presentation = styled.p`
    font-size: 14px;
    margin: 1rem 0; 
`
export const divLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
export const a = styled.a`
    text-decoration: none;
    text-align: center;
    background: hsl(0, 0%, 20%);
    color: hsl(0, 0%, 100%);
    padding: .6rem 4rem;
    border-radius: .7rem;
    font-weight: 700;

    &:hover{
        background:  hsl(75, 94%, 57%);
        color: hsl(0, 0%, 8%);
    }
    
`