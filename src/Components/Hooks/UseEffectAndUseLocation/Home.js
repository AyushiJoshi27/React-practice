import { Link, useEffect, useLocation } from "react-router-dom";
// This is corresponding to "/" route
const useScrollToTop = () => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo({ top: 0 });
    }, [location]);
  };

const Home = (props) => {
    useScrollToTop();
    return (
      <>
        <h1>Home</h1>
        <hr />
        <p style={{ marginTop: "50vh" }}>
          <Link to="/ contact">Go to contact page</Link>
        </p>
        <p style={{marginTop: "10vh"}}>
          <Link to="/about">Go to About page</Link>
        </p>
      </>
    );
  };
  
export default Home;