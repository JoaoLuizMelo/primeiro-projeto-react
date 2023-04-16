import React from "react"
import { ContainerItens as Container } from "./styles"

function ContainerItens({children,blurOn}){
    
    return <Container blurOn={blurOn} >{children}</Container> ;

}
export default ContainerItens