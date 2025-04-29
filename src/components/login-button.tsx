"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useDialog } from "@/app/providers/dialog-provider";

interface LoginButtonProps {
	className?: string;
	variant?: "default" | "outline";
	children?: React.ReactNode;
}

export function LoginButton({
	className,
	variant = "outline",
	children = "Login"
}: LoginButtonProps) {
	const { openLoginDialog } = useDialog();

	return (
		<Button
			onClick={openLoginDialog}
			variant={variant}
			className={cn(
				variant === "outline"
					? "text-white border-white/30 hover:bg-white/10"
					: "",
				className
			)}
		>
			{children}
		</Button>
	);
}
