import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Page1 from './components/Page1';
import Page2 from './components/Page2';

function App() {
  return (
    <BrowserRouter>
      <h1>Routing Example</h1>
      <Link to={`/`}>Go to Page 1</Link>
      <Link to={`/page2`}>Go to Page 2</Link>
      <Routes>
        <Route path="/page2" element={<Page2 />} />
        <Route exact path="/" element={<Page1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
