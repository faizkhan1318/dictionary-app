// import logo from './logo.svg';
import './App.css';
import DisplayResult from './Components/DisplayResult';
import Navbar from './Components/Navbar';
import SearchBar from './Components/SearchBar';
import Home from './Components/Home';
import { useSelector } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import History from './Components/History';


function App() {
  const history = useSelector((state) => state);
  // console.log(history);
  return (
  
      <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        {history.length > 0 &&
          history.map((item, idx) => {
            console.log(idx);
            return <Route key={idx} path={`/${item[0].word}`} element={<DisplayResult result={item}/>} />;
          })}
      </Routes>
    </div>

  );
}

export default App;
