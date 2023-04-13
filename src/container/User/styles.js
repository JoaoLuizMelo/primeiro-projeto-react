import styled from "styled-components";
import Background from '../../assets/background.svg';


export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

export const H1 = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 40px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 28px;
`;

export const Image = styled.img`
    margin-top: 83px;
    margin-bottom: 68px;
` ;

export const ContainerItens = styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    border-radius: 61px 61px 0px 0px;
    padding: 50px 35px 74px 35px;
    backdrop-filter: blur(22.5px);
    height: 100%   ;
    min-height: calc(100vh - 170px);
`;

export const InputLabel = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.408px;
    color: #EEEEEE;
    margin-left: 25px;
`;



export const Button = styled.button`
    width: 342px;
    height: 74px;
    background: transparent;
    border-radius: 14px;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 28px;
    color: #FFFFFF;
    margin-top: 50px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 14px;
    border: 1px solid #FFFFFF;
    outline: none;
    

    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.6;
    }

    img{
        transform: scaleX(-1);
    }
`;

export const Users = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    width: 342px;
    height: 58px;
    border: none;
    margin-top: 20px;
   
    p{ 
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        color: #FFFFFF;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }

`;