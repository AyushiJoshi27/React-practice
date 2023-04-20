import React, { createContext } from 'react';
import { useContext } from 'react';
import { NotificationContext, ThemeContext, FontContext } from './Mains'; 

function Header() {
    //const {notifications, theme, fontSize} = 
    const {notifications, setNotifications} = useContext(NotificationContext);
    const {theme, setTheme} = useContext(ThemeContext);
    const { fontSize, setFontSize } = useContext(FontContext);
    
  return (
    <header style={{background:theme.background, fontSize: fontSize + "px"}}>
        <p>Notification number {notifications} times added.</p>
        <button onClick={()=> setNotifications(notifications+1)}>Add</button><br />
        <button onClick={() => {
            setTheme({background:theme.background === "blue" ? "green" : "lightgrey"})
        }}>Change theme</button><br />
        <button onClick={() => setFontSize(fontSize+2)}>Increase font-size</button>
    </header>
  )
}

export default Header;

//backgroundColor: theme.background,
//{notifications.length}