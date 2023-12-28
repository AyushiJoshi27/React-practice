import { NavLink } from 'react-router-dom';

const NavBar = () => {
 return (
 <nav>
       <ul>
          <li>
             <NavLink to="/">Home</NavLink>
          </li>
          <li>
             <NavLink to="/layout">Layout Components</NavLink>
          </li>
          <li>
            <NavLink to="data-display">Data Display</NavLink>
          </li>
          <li>
             <NavLink to="/overlays">Overlays</NavLink>
          </li>
          <li>
             <NavLink to="/form-element">Form elements</NavLink>
          </li>
          <li>
             <NavLink to="/extras">Extra components</NavLink>
          </li>
          <li>
             <NavLink to="/react-hook-form">React Hook Form</NavLink>
          </li>
          <li>
             <NavLink to="/formik">Formik</NavLink>
          </li>
          <li>
             <NavLink to="/formik-validation">Formik Validation</NavLink>
          </li>
          <li>
             <NavLink to="/style-props">Style props</NavLink>
          </li>
          <li>
             <NavLink to="/features">Features</NavLink>
          </li>
          <li>
             <NavLink to="/hooks-utility">Hooks-utility</NavLink>
          </li>
       </ul>
 </nav>
 );
};

export default NavBar;