import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from './Pages/Page1/Page1.jsx';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Page1/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
