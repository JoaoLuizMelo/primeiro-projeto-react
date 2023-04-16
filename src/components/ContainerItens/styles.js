import styled from "styled-components";


export const ContainerItens = styled.div`
display: flex;
flex-direction: column;
background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
border-radius: 61px 61px 0px 0px;
padding: 50px 35px 74px 35px;
min-height:calc(100vh - 180px);
${props=> props.blurOn && `min-height: calc(100vh - 170px); backdrop-filter: blur(22.5px);`}
`;