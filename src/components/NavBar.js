import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser } from "../contexts/CurrentUserContext";

// the steps we need to take  to use a context value in a child component:
// First, we have to create a context  object in the parent component. 
// export const CurrentUserContext = createContext(); 
// Then, we have to wrap the children  in the context object provider,
// <CurrentUserObject.Provider>
//  <div className={styles.App}> (..) </div>  
// <CurrentUserObject.Provider>
// we have to pass in the data you'd like the  children components to access in the value prop.
// <CurrentUserObject.Provider value={currentUser}>
//  <div className={styles.App}></div>  
// <CurrentUserObject.Provider>
// Finally, to access that value in a child component  
// use the use context hook and  call it with the context object.
// const currentUser = useContext(CurrentUserContext);

const NavBar = () => {
  const currentUser = useCurrentUser();
  const loggedInIcons = <>{currentUser?.username}</>
  const loggedOutIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signin"
      >
        <i className="fas fa-sign-in-alt"></i>Sign in
      </NavLink>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signup"
      >
        <i className="fas fa-user-plus"></i>Sign up
      </NavLink>{" "}
    </>
  );
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="45" />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/"
            >
              <i className="fas fa-home"></i>Home
            </NavLink>
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
