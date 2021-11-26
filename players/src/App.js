import './App.css';
import Nav from './components/navbar'
import Body from './components/body';
import Footer from './components/footer'
import {Routes, BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav></Nav  >
        <Routes>
          <Route path='/players' element={<Body/>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
    
  );
}

export default App;
