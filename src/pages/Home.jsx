import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useOutletContext } from "react-router-dom";

const Home = () => {

  const { setTitle } = useOutletContext();

  setTitle("Home")

  return (
    <div>
        <Title>Página principal</Title>
    </div>
  );
};

export default Home;

const Title = styled.h1`
    color: #b31d15;
`