import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import People from '../../assets/people.svg'
import Arrow from '../../assets/arrow.svg'


import { Container, H1, Image, ContainerItens, InputLabel, Input, Button } from "./styles";
import axios from "axios";



function App() {

  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const history = useHistory();

  //  const users = [{ id: Math.random(), name: "João Luíz", age: 28 }, { id: Math.random, name: "Layssa", age: 25 }]

  function goBackPage(){
    history.push("/usuarios")};

  async function addNewUser() {
    //setUsers([...users, { id: Math.random(), name: inputName.current.value, age: inputAge.current.value }]) <- 1ª forma de fazer
    const { data : newUser } = await axios.post("http://localhost:3001/users", {name:inputName.current.value , age:inputAge.current.value });
    setUsers([...users, newUser])
 
    goBackPage()
    
  };



  return (
    <Container>
      <Image alt="Logo-image" src={People} />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome:</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade:</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>Cadastrar <img alt="seta" src={Arrow} /></Button>

       
      </ContainerItens>
    </Container>
  );
}
export default App;