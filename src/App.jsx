import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
