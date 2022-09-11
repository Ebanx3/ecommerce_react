import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { contexto } from "../UserContext";
import ChatContainer from "./ChatContainer";
import UserRL from "./UserRL";

const Header = () => {
  const [userRL, setUserRL] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const UserContext = useContext(contexto);
  const ShowHideUserRL = () => {
    userRL ? setUserRL(false) : setUserRL(true);
  };

  const ShowHideChat = () => {
    showChat ? setShowChat(false) : setShowChat(true);
  };

  return (
    <>
      <div className="header">
        <div className="header__logo">E-COMMERCE</div>
        <div className="header__links">
          <NavLink to="/">INICIO</NavLink>
          <NavLink to="/masVendidos">+ VENDIDOS</NavLink>
          <NavLink to="/ofertas">OFERTAS</NavLink>
          <Link to="#" onClick={ShowHideUserRL}>
            USUARIO
          </Link>
          {UserContext.loggedIn ? (
            <Link to="#" className="chatBtn" onClick={ShowHideChat}>
              <span className="material-symbols-outlined">forum</span>
            </Link>
          ) : (
            <></>
          )}
          {userRL ? <UserRL func={ShowHideUserRL} /> : <></>}
        </div>
      </div>
      {showChat ? <ChatContainer /> : <></>}
    </>
  );
};

export default Header;
