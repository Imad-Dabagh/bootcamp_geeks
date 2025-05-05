import React, { useContext } from 'react'
import { ThemeContext, ThemeProvider } from './ThemeProvider'

const ThemeSwitcher = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    const themeStyle = {
        backgroundColor: theme === "light" ? "#ffffff" : "#333333",
        color: theme === "light" ? "#000000" : "#ffffff",
        minHeight: "100vh",
    }
  return (
    <div style={themeStyle}>
        <button onClick={toggleTheme} >Switch Theme</button>
    </div>
  )
}

export default ThemeSwitcher