import { StrictMode } from "react";
import Header from "./components/Header/index.jsx";
import Footer from "./components/Footer/index.jsx";

export default () => (
  <StrictMode>
    <Header />
    <main></main>
    <Footer />
  </StrictMode>
);