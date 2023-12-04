import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import MainContent from "../components/mainContent";
const Home = () => {
  return (
    <>
      <Header />
      <MainContent pageName="HOME" />
      <Footer/>
    </>
  );
};

export default Home;
