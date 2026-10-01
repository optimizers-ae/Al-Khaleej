import Navbar from "./components/Navbar";
import Router from "./Router";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Router />
      <Footer />
    </>
  );
};

export default App;
