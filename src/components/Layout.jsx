import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from "@iconify/react"
import Logotype from "../assets/logotype.png"
import { useLocation } from 'react-router-dom';

function Layout() {

  const [title, setTitle] = useState("Home")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const { pathname } = useLocation();

  const links = [
    {
      icon: "heroicons:clipboard-document-list-solid",
      label: "Solicitar trámite",
      href: "/solicitar-tramite"
    },
    {
      icon: "heroicons:clipboard-document-list-solid",
      label: "Completar documentación",
      href: "/completar-documentación"
    }
  ]

  return (
    <LayoutContainer sidebarOpen={sidebarOpen}>
      <Header>
        <a href='/'>
          <img src={Logotype} alt="Logotype" />
        </a>
        <nav>
          <h2>{title}</h2>
        </nav>
      </Header>
      <Sidebar sidebarOpen={sidebarOpen}>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          <Icon icon="ci:hamburger-md" width="2rem" height="2rem" />
        </button>
        <Links sidebarOpen={sidebarOpen}>
          {
            links.map((link) => (
              <Link href={link?.href} pathname={pathname} sidebarOpen={sidebarOpen}>
                <Icon icon={link?.icon} width="2rem" height="2rem" />
                <label>{link?.label}</label>
              </Link>
            ))
          }  
        </Links>
      </Sidebar>
      <main>
        <Outlet context={{ setTitle }} />
      </main>
    </LayoutContainer>
  );
}

export default Layout;

const LayoutContainer = styled.div`
    width: 100%;
    min-width: 100vw;
    height: 100%;
    min-height: 100vh;
    background-color: #DDEFFA; 

    main {
      margin-left: 70px;
      margin-top: 70px;
    }
`

const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: calc(100% - 2rem);
    height: 70px;
    background-color: #166C88;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    padding-left: 90px;
    gap: 2rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);

    img {
      width: 50px;
      height: 50px;
    }

    ul {
        display: flex;
        gap: 1rem;
        list-style: none;
        padding: 0;
        margin: 0;

        :hover {
            text-decoration: underline;
        }
    }

    a {
        text-decoration: none;
        color: #DDEFFA;
        font-size: 1.2rem;
    }

    h2 {
      width: fit-content;
      text-align: center;
      font-size: 1.5rem;
      color: #C5EDFA;
    }
`

const Sidebar = styled.div`
  height: 100vh;
  width: ${(props) => props.sidebarOpen ? "350px" : "70px"};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #166C88;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 5rem;
  padding: 1rem 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  transition: width 0.5s ease;

  button {
    position: absolute;
    top: 19px;
    left: 19px;
    transform: ${(props) => props.sidebarOpen && "rotate(90deg)"};
    transition: all 0.5s ease;
  }
`

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6rem;
  width: calc(100% - 8px);
`

const Link = styled.a`
  width: calc(100% - 1rem + 2px);
  height: 60px;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 1rem;
  background-color: ${(props) => props.pathname === props.href && "#2193b8"};
  color: #fff;
  font-size: 1.2rem;
  text-decoration: none;
  border-radius: 0 20px 20px 0;
  overflow: hidden;

  &:hover {
    background-color: #071952;
  }

  label {
    overflow: hidden;
    width: ${(props) => props.sidebarOpen ? "70%" : "0px"};
    margin-left: 1rem;
    white-space: nowrap;
    transition: width 0.5s ease;
    cursor: pointer;
  }
`