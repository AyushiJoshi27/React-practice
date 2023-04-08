import { Outlet, Link } from "react-router-dom";


const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/Counter">UseState</Link>
          </li>
          <li>
            <Link to="use_ref">UseRef</Link>
          </li>
          <li>
            <Link to="use_context">UseContext</Link>
          </li>
          <li>
            <Link to='count_events'>CountEvents</Link>
          </li>
          <li>
            <Link to='login-route'>Login</Link>
          </li>
          <li>
            <Link to='protected_home'>Home</Link>
          </li>
          <li>
          <Link to='protected_about'>About</Link>
          </li>
          <li>
          <Link to='protected_profile'>Profile</Link>
          </li>
          <li>
            <Link to='layout_effect_basic'>Layout Effect</Link>
          </li>
          <li>
            <Link to='layout_effect_event'>Layout Event Effect</Link>
          </li>
          <li>
            <Link to='requirement_of_memo'>Requirement of Memo</Link>
          </li>
          <li>
            <Link to='use_memo'>UseMemo</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;