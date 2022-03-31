


import { useEffect, useState } from 'react';
import User from './User';
import Loading from './Loading';

const url = 'https://randomuser.me/api/';


function App() {
  const [user, setUser] = useState({});

  const getUser = async () => {
    const res = await fetch(url);
    const data = await res.json();
    const person = data.results[0];
    const name = `${person.name.title} : ${person.name.first} ${person.name.last}`;
    const {phone, email} = person;
    const {large : image} = person.picture;
    const {date : dateBirth} = person.dob;
    const street = `${person.location.street.number} ${person.location.street.name}` ;
    const {password} = person.login;
    setUser({name, phone, email, dateBirth, street, image, password});
  }
  useEffect(() => {
    getUser();
  }, []) 
  return (
    <div className="App">
       <User {...user} getUser = {getUser}/>
    </div>
  );
}

export default App;
