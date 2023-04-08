import { Link, useEffect, useLocation } from "react-router-dom";
const useScrollToTop = () => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo({ top: 0 });
    }, [location]);
  };

const About = (props) => {
    useScrollToTop();
    return (
      <>
        <h1>About</h1>
        <hr />
        <p style={{ marginTop: "50vh" }}>
          <Link to="/home">Go to homepage</Link>
        </p>
        <p style={{ marginTop: "10vh" }}>
          <Link to="/contact">Go to contact page</Link>
        </p>
      </>
    );
  };
  
export default About;