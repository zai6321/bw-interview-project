"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useDialog } from "@/app/providers/dialog-provider";

interface RegisterButtonProps {
	className?: string;
	size?: "default" | "large";
	children?: React.ReactNode;
}

export function RegisterButton({
	className,
	size = "default",
	children = "Register Now"
}: RegisterButtonProps) {
	const { openSignupDialog } = useDialog();

	return (
		<Button
			onClick={openSignupDialog}
			className={cn(
				"bg-orange text-white hover:bg-orange/90",
				size === "large" ? "px-8 py-6 text-lg" : "",
				className
			)}
		>
			{children}
		</Button>
	);
}
