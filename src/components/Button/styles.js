import styled from "styled-components";

export const Button = styled.button`
    width: 342px;
    height: 74px;
    background: ${props=> props.isBack ? "transparent":"rgba(0, 0, 0, 0.8)"};
    border-radius: 14px;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 28px;
    color: #FFFFFF;
    margin-top: 100px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 14px;
    border:${props=> props.isBack? "1px solid #FFFFFF":"none"};
    outline: none;
    

    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.6;
    }
    img{
        transform:${props=> props.isBack? "scaleX(-1)":"scaleX(1)"} ;
    }
`;