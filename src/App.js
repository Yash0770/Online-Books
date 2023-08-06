import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./_Components/Header/Header";
import BookBody from "./_Components/modules/Books/BookBody";
import Footer from "./_Components/Footer/Footer";
import OnlineBooks from "./_Components/modules/Books/OnlineBooks";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<BookBody />} />
          <Route path="online_books" element={<OnlineBooks />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
