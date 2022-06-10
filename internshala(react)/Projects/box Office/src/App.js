// importing react libraries
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

// importing components
import Home from "./components/Home";
import ShowMore from "./components/ShowMore";
import Starred from "./components/Starred";

function App() {
  return (
    <>
      <Router>
        <Routes>
          
          {/* home page  */} 
          <Route exact path="/" element={<Home />} />

          {/* about  */} 
          <Route exact path="/starred" element={<Starred />} />

          {/* show more  */} 
          <Route exact path="show/:id" element={<ShowMore/>}/>
          
          {/* invalid path  */}
          <Route
            path="*"
            element={
              <h1 className="error-page"> Page not found.(404 error) </h1>
            }
          >
            404 page
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
