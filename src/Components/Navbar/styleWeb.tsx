import styled from "styled-components";
import { global } from "../../globalStyle";

export const NavDiv = styled.div `
    display: flex;
    justify-content: space-between;
    // gap: 12px;

    margin: 2vh 0 0 0;
    // padding: 0 5%;
    width: 92%;

    // overflow-x: scroll;
    // ::-webkit-scrollbar {
    //     display: none;
    // }
    .diaSelect {
        background-color: ${global.colors.laranja} !important;
        color: ${global.colors.branco};
    }

`;

/*-----------------------------------------------------------*/

export const NavButton = styled.button `
    display: flex;
    flex-direction: column;

    min-width: 9.84375vw;
    height: 7.1875vw;
    
    align-items: center;
    justify-content: center;

    // Tive q escurecer o cinza pq n era perceptivel em boa parte dos monitores de computador. cinza = branco
    // background: ${global.colors.cinzaOpaco(.07)};
    background: ${global.colors.cinzaOpaco(.2)};
    
    outline: none;
    border: none;
    border-radius: 16px;

    transition: transform 0.5s ease;  
`;

/*-----------------------------------------------------------*/

export const DiaSemana = styled.p `
    margin-top: 1.5vh;
    text-align: center;

    font-family: ${global.fonts.quickSand};
    font-weight: 700;
    font-size: 1.25vw;

    color: ${global.colors.cinza};
`;

export const DiaMes = styled.p `
    text-align: center;

    font-family: ${global.fonts.quickSand};
    font-weight: 700;
    font-size: .75vw;

    color: ${global.colors.cinza};
`;

export const DiaRelativo = styled.p `
    margin-top: auto;
    margin-bottom: 1.75vh;
    text-align: center;

    font-family: ${global.fonts.quickSand};
    font-weight: 700;
    font-size: .75vw;

    color: ${global.colors.cinza};
`;