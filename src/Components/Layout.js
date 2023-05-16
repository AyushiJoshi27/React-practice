import { Outlet, Link } from "react-router-dom";


const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="button">Button</Link>
          </li>
          <li>
            <Link to='group-orient'>Group Orient</Link>
          </li>
          <li>
            <Link to='form-props'>Form props</Link>
          </li>
          <li>
            <Link to='post-container'>Post Container</Link>
          </li>
          <li>
            <Link to='img-list'>Image list</Link>
          </li>
          <li>
            <Link to='standard-title-bar-img'>standard-title-bar-img</Link>
          </li>
          <li>
            <Link to='custom-img-list'>Custom Image list</Link>
          </li>
          <li>
            <Link to='basic-navbar'>Basic navbar</Link>
          </li>
          <li>
            <Link to='menu-navbar'>Menu navbar</Link>
          </li>
          <li>
            <Link to='SimpleContainer'>SimpleContainer</Link>
          </li>
          <li>
            <Link to='api-content'>Api Content</Link>
          </li>
          <li>
            <Link to='badge'>Badge</Link>
          </li>
          <li>
            <Link to='albums'>Albums</Link>
          </li>
          <li>
            <Link to='facebook'>Facebook profile page</Link>
          </li>
          <li>
              <Link to='comment'>Comment</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;