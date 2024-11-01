import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
	theme: Theme;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const [theme, setTheme] = useState<Theme>("dark");

	useEffect(() => {
		const storedTheme = (localStorage.getItem("theme") as Theme) || "dark";
		setTheme(storedTheme);
		document.documentElement.classList.toggle(
			"dark",
			storedTheme === "dark"
		);
	}, []);

	const toggleTheme = () => {
		const newTheme: Theme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
		document.documentElement.classList.toggle("dark", newTheme === "dark");
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = (): ThemeContextType => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};
