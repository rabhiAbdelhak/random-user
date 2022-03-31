import React, { useState } from "react";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";
import Loading from "./Loading";

const User = ({
  name,
  phone,
  email,
  dateBirth,
  street,
  image,
  password,
  getUser,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const information = [
    { title: "My Name Is : ", value: name, icon: <FaUser /> },
    {
      title: "My Email is",
      value: email,
      icon: <FaEnvelopeOpen />,
    },
    {
      title: "My Birthday is",
      value: dateBirth,
      icon: <FaCalendarTimes />,
    },
    {
      title: "My Phone Number:",
      value: phone,
      icon: <FaPhone />,
    },
    {
      title: "My Password is",
      value: password,
      icon: <FaLock />,
    },
    {title: "My Adress Is", value: street, icon: <FaMap /> },
  ];
  return (
           <article className="user">
             <div class="line"></div>
             <img src={image} alt="user" />
             <div className="info">
               <p>{information[currentIndex].title}</p>
               <h2>{information[currentIndex].value}</h2>
             </div>
             <div className="actions">
               {information.map((inf, index) => {
                 return (
                   <button
                     className={`${currentIndex === index ? "active" : ""}`}
                     onMouseOver={(e) => setCurrentIndex(index)}
                   >
                     {inf.icon}
                     {inf.icon}
                   </button>
                 );
               })}
             </div>
             <button className="random-btn" onClick={getUser}>
               Random Person
             </button>
           </article>
  );
};

export default User;

User.defaultProps = {
  thumbnail: "https://randomuser.me/api/portraits/men/75.jpg",
};
