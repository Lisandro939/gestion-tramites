import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

function Layout() {
  return (
    <LayoutContainer>
      <Header>
        <h1>Gestión de trámites</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/solicitar-tramite">Solicitar trámite</a></li>
          </ul>
        </nav>
      </Header>
      <main>
        <Outlet />
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
`

const Header = styled.header`
    width: calc(100% - 2rem);
    height: 100px;
    background-color: #166C88;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    padding-left: 2rem;
    gap: 2rem;

    h1 {
        font-size: 2rem;
        color: #DDEFFA;
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
`