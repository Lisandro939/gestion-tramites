import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useOutletContext } from "react-router-dom";
import ProcedureImg from "../assets/document-procedure-team.png"

const Home = () => {

  const { setTitle } = useOutletContext();

  setTitle("Home")

  const cards = [
    {
      img: ProcedureImg,
      label: "Solicitar nuevo trámite",
      href: "/solicitar-tramite"
    },
    {
      img: ProcedureImg,
      label: "Completar documentación",
      href: "/completar-documentacion"
    },
    {
      img: ProcedureImg,
      label: "Cargar trámite",
      href: "/"
    },
    {
      img: ProcedureImg,
      label: "Asignar consultor",
      href: "/"
    },
    {
      img: ProcedureImg,
      label: "Asignar consultor",
      href: "/"
    },
    {
      img: ProcedureImg,
      label: "Asignar consultor",
      href: "/"
    },
    {
      img: ProcedureImg,
      label: "Asignar consultor",
      href: "/"
    },
    {
      img: ProcedureImg,
      label: "Asignar consultor",
      href: "/"
    },
    {
      img: ProcedureImg,
      label: "Asignar consultor",
      href: "/"
    },
    {
      img: ProcedureImg,
      label: "Asignar consultor",
      href: "/"
    },
    {
      img: ProcedureImg,
      label: "Asignar consultor",
      href: "/"
    }
  ]

  return (
    <Container>
      {
        cards.map((card) => (
          <Card href={card?.href}>
            <img height={140} src={card?.img} />
            <button>{card?.label}</button>
          </Card>
        ))
      }

    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: calc(100% - 4rem);
  height: 100%;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
`

const Card = styled.a`
  width: fit-content;
  height: fit-content;
  background-color: #fff;
  border-radius: 20px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  img {
    border-radius: 20px 20px 0 0;
  }

  button {
    color: #222;
    width: 100%;
    height: 3rem;
    border-radius: 0 0 20px 20px;
    background-color: #C5EDFA;
    border: 1px solid #ccc;
  }
`