import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Avatar from '../../assets/avatar.svg'
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'

import { Container, H1, Image, ContainerItens,  Button, Users } from "./styles";
import axios from "axios";



function User() {

  const [users, setUsers] = useState([]);
  const history = useHistory();
 
useEffect(()=>{
  async function fetchUsers (){
    const {data:newUsers} = await axios.get("http://localhost:3001/users")
    setUsers(newUsers)
  }
  fetchUsers()

    
},[]);

function goBackPage(){
  history.push("/")
  };

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter((user) => user.id !== userId)
    setUsers(newUsers)
  };


  return (
    <Container>
      <Image alt="Logo-image" src={Avatar} />
      <ContainerItens>
        <H1>Usuários</H1>
     
        <ul>
          {users.map((user) => (
            <Users key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p><button onClick={() => deleteUser(user.id)}><img alt="Imagem-Lixeira" src={Trash} /></button>
            </Users>
          ))}
        </ul>

         <Button onClick={goBackPage}><img alt="seta" src={Arrow} />Voltar </Button>

      </ContainerItens>
    </Container>
  );
}
export default User;