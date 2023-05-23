import React from "react";
import Container from "@mui/material/Container";
import Nav from "../../components/Nav";

const MainPage = () => {
  return (
    <Container
      component="main"
      maxWidth="1"
      sx={{ backgroundColor: "background.default", height: "100vh" }}
    >
      <Nav />
    </Container>
  );
};

export default MainPage;
