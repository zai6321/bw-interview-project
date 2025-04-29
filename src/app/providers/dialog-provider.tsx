"use client";

import { createContext, useState, useContext, type ReactNode } from "react";
import { LoginDialog } from "@/components/login-dialog";
import { SignupDialog } from "@/components/signup-dialog";

interface DialogContextType {
	openLoginDialog: () => void;
	openSignupDialog: () => void;
	closeLoginDialog: () => void;
	closeSignupDialog: () => void;
	loginOpen: boolean;
	signupOpen: boolean;
	setLoginOpen: (open: boolean) => void;
	setSignupOpen: (open: boolean) => void;
	switchToSignup: () => void;
	switchToLogin: () => void;
}

const DialogContext = createContext<DialogContextType | undefined>(undefined);

export function DialogProvider({ children }: { children: ReactNode }) {
	const [loginOpen, setLoginOpen] = useState(false);
	const [signupOpen, setSignupOpen] = useState(false);

	const openLoginDialog = () => setLoginOpen(true);
	const closeLoginDialog = () => setLoginOpen(false);
	const openSignupDialog = () => setSignupOpen(true);
	const closeSignupDialog = () => setSignupOpen(false);

	const switchToSignup = () => {
		setLoginOpen(false);
		setSignupOpen(true);
	};

	const switchToLogin = () => {
		setSignupOpen(false);
		setLoginOpen(true);
	};

	return (
		<DialogContext.Provider
			value={{
				openLoginDialog,
				openSignupDialog,
				closeLoginDialog,
				closeSignupDialog,
				loginOpen,
				signupOpen,
				setLoginOpen,
				setSignupOpen,
				switchToSignup,
				switchToLogin
			}}
		>
			{children}
			<LoginDialog
				open={loginOpen}
				onOpenChange={setLoginOpen}
			/>
			<SignupDialog
				open={signupOpen}
				onOpenChange={setSignupOpen}
			/>
		</DialogContext.Provider>
	);
}

export function useDialog() {
	const context = useContext(DialogContext);
	if (context === undefined) {
		throw new Error("useDialog must be used within a DialogProvider");
	}
	return context;
}
