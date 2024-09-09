import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Nav from "./components/NavTabs";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
