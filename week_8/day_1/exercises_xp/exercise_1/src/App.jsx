import React from "react";
import { ThemeProvider } from "./ThemeProvider";
import ThemeSwitcher from "./ThemeSwitcher";

function App() {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  );
}

export default App;
