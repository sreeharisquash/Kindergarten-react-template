import "./App.css";
import Router from "./Routes/Router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

{
  /* <script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
  crossorigin="anonymous"
></script>; */
}

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000, once : true});
  }, []);
  return (
    <>
     <Router/>
    </>
  );
}

export default App;
