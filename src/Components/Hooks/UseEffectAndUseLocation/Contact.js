import { Link, useLocation, useEffect } from "react-router-dom";
const useScrollToTop = () => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo({ top: 0 });
    }, [location]);
  };

// This is corresponding to "/contact" route
const Contact = (props) => {
    useScrollToTop();
    return (
      <>
        <h1>Contact</h1>
        <hr />
        <p style={{ marginTop: "50vh" }}>
          <Link to="/home">Go to home page</Link>
        </p>
        <p style={{marginTop: "10vh"}}>
          <Link to="/about">Go to About page</Link>
        </p>
      </>
    );
  };
  
export default Contact