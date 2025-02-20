import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ChannelList from "./components/ChannelList";
import ChannelPage from "./pages/ChannelPage";

export default function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/channels" element={<ChannelList />} />
          <Route path="/channel/:id" element={<ChannelPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
