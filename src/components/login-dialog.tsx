"use client";

import { useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/app/providers/auth-provider";
import { useDialog } from "@/app/providers/dialog-provider";

interface LoginDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

const loginSchema = z.object({
	email: z
		.string()
		.min(1, "Email is required")
		.email("Invalid email address"),
	password: z
		.string()
		.min(1, "Password is required")
		.min(6, "Password must be at least 6 characters")
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginDialog({ open, onOpenChange }: LoginDialogProps) {
	const [isLoading, setIsLoading] = useState(false);
	const { login } = useAuth();
	const { switchToSignup } = useDialog();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<LoginFormValues>({
		resolver: zodResolver(loginSchema),
		mode: "onChange" // This enables validation as the user types or changes fields
	});

	const onSubmit = async (data: LoginFormValues) => {
		setIsLoading(true);

		try {
			await login(data.email, data.password);

			toast.success("Login successful", {
				description: "You have been logged in successfully."
			});

			reset();
			onOpenChange(false);
		} catch (error) {
			toast.error("Login failed", {
				description: "Invalid email or password."
			});
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Dialog
			open={open}
			onOpenChange={onOpenChange}
		>
			<DialogContent className="sm:max-w-[425px] bg-background text-white max-h-[90vh] p-0">
				<DialogHeader className="p-6 pb-2">
					<DialogTitle className="text-2xl font-title text-light-blue">
						Login to Blackwell
					</DialogTitle>
				</DialogHeader>

				<ScrollArea className="max-h-[calc(90vh-130px)] overflow-y-auto px-6">
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="space-y-4"
					>
						<div className="space-y-1">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								type="email"
								placeholder="Email"
								className="bg-white/10 border-white/20 text-white"
								{...register("email")}
							/>
							{errors.email && (
								<p className="text-red-500 text-xs">
									{errors.email.message}
								</p>
							)}
						</div>
						<div className="space-y-1">
							<Label htmlFor="password">Password</Label>
							<Input
								id="password"
								type="password"
								placeholder="Password"
								className="bg-white/10 border-white/20 text-white"
								{...register("password")}
							/>
							{errors.password && (
								<p className="text-red-500 text-xs">
									{errors.password.message}
								</p>
							)}
						</div>
						<div className="flex flex-row justify-center items-center">
							<span className="text-muted-foreground">
								Don&apos;t have an account?
							</span>
							<Button
								type="button"
								variant="link"
								onClick={switchToSignup}
								className="text-light-blue"
							>
								Sign up
							</Button>
						</div>
					</form>
				</ScrollArea>

				<DialogFooter className="p-6 pt-2">
					<Button
						type="button"
						onClick={handleSubmit(onSubmit)}
						className="w-full bg-orange text-white hover:bg-orange/90"
						disabled={isLoading}
					>
						{isLoading ? "Logging in..." : "Login"}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
