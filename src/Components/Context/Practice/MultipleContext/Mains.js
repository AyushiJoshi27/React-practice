import React, {useState, createContext} from 'react';
import Home from './Home';

const NotificationContext = createContext();
const ThemeContext = createContext();
const FontContext = createContext();

function Mains() {
  const [notifications, setNotifications] = useState(0);
  const [theme, setTheme] = useState({background: "blue"});
  const [fontSize, setFontSize] = useState(20);

  return (
    <NotificationContext.Provider value={{notifications, setNotifications}}>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <FontContext.Provider value={{fontSize, setFontSize}} >
          <Home/>
        </FontContext.Provider>
      </ThemeContext.Provider>
    </NotificationContext.Provider>
  )
}

export default Mains;
export {NotificationContext, ThemeContext, FontContext};