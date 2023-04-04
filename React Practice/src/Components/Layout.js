import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">UseState</Link>
          </li>
          <li>
            <Link to="/use_ref">UseRef</Link>
          </li>
          <li>
            <Link to="/use_context">UseContext</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;