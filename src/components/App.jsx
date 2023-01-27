import React from "react";
import Card from "./Card";
import Header from "./Header";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact){
  return <Card 
    key = {contact.id}
    name = {contact.name}
    img={contact.imgURL}
    phone = {contact.phone}
    email = {contact.email}
  />
}

function App() {
  return (
    <>
    <Header />
    <Avatar img = "./images/Alok-photo.jpg"/>

    {contacts.map(createCard)}

    {/* <Card name={contacts[0].name}
      img={contacts[0].imgURL}
      phone={contacts[0].phone}
      email ={contacts[0].email}/>

    <Card name={contacts[1].name}
      img={contacts[1].imgURL}
      phone={contacts[1].phone}
      email ={contacts[1].email}/>

    <Card name={contacts[2].name}
      img={contacts[2].imgURL}
      phone={contacts[2].phone}
      email ={contacts[2].email}/> */}
    </>
  );
}

export default App;
