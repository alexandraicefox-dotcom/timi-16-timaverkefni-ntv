import { type ReactNode } from "react"; 
import { ThemeContext } from "./ThemeContext";
import { useLocalStorage } from "../Hooks/useLocalStorage";

type Theme = "light" | "dark";

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useLocalStorage<Theme>("light");


    function toggleTheme() {
		setTheme(theme === "light" ? "dark" : "light");
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}
