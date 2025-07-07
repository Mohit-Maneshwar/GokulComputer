import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <MainRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
