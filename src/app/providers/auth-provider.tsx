"use client";

import {
	createContext,
	useState,
	useEffect,
	type ReactNode,
	useContext
} from "react";
import {
	getStoredUser,
	loginUser,
	registerUser,
	logoutUser
} from "../store/user.js";

interface User {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	mobile: string;
	country: string;
}

interface SignupData {
	firstName: string;
	lastName: string;
	email: string;
	mobile: string;
	country: string;
	password: string;
}

interface AuthContextType {
	user: User | null;
	login: (email: string, password: string) => Promise<User | undefined>;
	signup: (data: SignupData) => Promise<User | undefined>;
	logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		// Check if user data exists using our store
		const storedUser = getStoredUser();
		if (storedUser) {
			setUser(storedUser);
		}
	}, []);

	const login = (email: string, password: string) => {
		// Use the promise-based login function from our store
		return loginUser(email, password).then((userData) => {
			setUser(userData);
			return userData;
		});
	};

	const signup = (data: SignupData) => {
		// Use the promise-based register function from our store
		return registerUser(data).then((newUser) => {
			setUser(newUser);
			return newUser;
		});
	};

	const logout = () => {
		// Use the promise-based logout function from our store
		return logoutUser().then(() => {
			setUser(null);
		});
	};

	return (
		<AuthContext.Provider value={{ user, login, signup, logout }}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const context = useContext(AuthContext);

	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider");
	}

	return context;
}
