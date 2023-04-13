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
            <Link to='render_json'>Render Json</Link>
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
          <li>
            <Link to='use_callback'>UseCallback</Link>
          </li>
          <li>
            <Link to='way_to_use_context'>Context-Requiremnt</Link>
          </li>
          <li>
            <Link to='context-requiremnt'>Way_to_use Context</Link>
          </li>
          <li>
            <Link to='product_store_data'>Product store data</Link>
          </li>
          <li>
            <Link to='pr_home'>Home</Link>
          </li>
          <li>
            <Link to='pr_profile'>Pr Profile</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;