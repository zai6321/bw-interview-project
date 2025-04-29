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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/app/providers/auth-provider";
import { useDialog } from "@/app/providers/dialog-provider";

interface SignupDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

const signupSchema = z
	.object({
		firstName: z
			.string()
			.min(1, "First name is required")
			.min(2, "First name must be at least 2 characters"),
		lastName: z
			.string()
			.min(1, "Last name is required")
			.min(2, "Last name must be at least 2 characters"),
		email: z
			.string()
			.min(1, "Email is required")
			.email("Invalid email address"),
		mobile: z
			.string()
			.min(1, "Mobile number is required")
			.min(8, "Mobile number must be at least 10 characters"),
		country: z.string().min(1, "Country is required"),
		password: z
			.string()
			.min(1, "Password is required")
			.min(6, "Password must be at least 6 characters"),
		confirmPassword: z.string().min(1, "Confirm password is required")
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"]
	});

type SignupFormValues = z.infer<typeof signupSchema>;

const countries = ["Malaysia", "Vietnam", "Thailand", "Others"];

export function SignupDialog({ open, onOpenChange }: SignupDialogProps) {
	const [isLoading, setIsLoading] = useState(false);
	const { signup } = useAuth();
	const { switchToLogin } = useDialog();

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		reset,
		setError
	} = useForm<SignupFormValues>({
		resolver: zodResolver(signupSchema),
		mode: "onChange",
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			mobile: "",
			country: "",
			password: "",
			confirmPassword: ""
		}
	});

	const onSubmit = async (data: SignupFormValues) => {
		setIsLoading(true);

		try {
			await signup(data);

			toast.success("Registration successful", {
				description: "Your account has been created successfully."
			});

			reset();
			onOpenChange(false);
		} catch (error) {
			const errorMessage =
				error instanceof Error
					? error.message
					: "There was an error creating your account.";

			if (errorMessage.includes("Email already exists")) {
				toast.error("Registration failed", {
					description: "Email already exists."
				});
				setError("email", {
					type: "manual",
					message: "Email already exists"
				});
			} else {
				toast.error("Registration failed", {
					description: "There was an error creating your account."
				});
			}
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Dialog
			open={open}
			onOpenChange={onOpenChange}
		>
			<DialogContent className="sm:max-w-[500px] bg-background text-white min-h-[90vh] p-0">
				<DialogHeader className="p-6 pb-2">
					<DialogTitle className="text-2xl font-title text-light-blue">
						Create an Account
					</DialogTitle>
				</DialogHeader>

				<ScrollArea className="max-h-[calc(90vh-130px)] px-6">
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="space-y-4"
					>
						<div className="grid grid-cols-2 gap-4">
							<div className="space-y-1">
								<Label htmlFor="firstName">First Name</Label>
								<Input
									id="firstName"
									placeholder="First Name"
									className="bg-white/10 border-white/20 text-white"
									{...register("firstName")}
								/>
								{errors.firstName && (
									<p className="text-red-500 text-xs">
										{errors.firstName.message}
									</p>
								)}
							</div>
							<div className="space-y-1">
								<Label htmlFor="lastName">Last Name</Label>
								<Input
									id="lastName"
									placeholder="Last Name"
									className="bg-white/10 border-white/20 text-white"
									{...register("lastName")}
								/>
								{errors.lastName && (
									<p className="text-red-500 text-xs">
										{errors.lastName.message}
									</p>
								)}
							</div>
						</div>
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
							<Label htmlFor="mobile">Mobile</Label>
							<Input
								id="mobile"
								placeholder="Mobile"
								className="bg-white/10 border-white/20 text-white"
								{...register("mobile")}
							/>
							{errors.mobile && (
								<p className="text-red-500 text-xs">
									{errors.mobile.message}
								</p>
							)}
						</div>
						<div className="space-y-1">
							<Label htmlFor="country">Country</Label>
							<Controller
								name="country"
								control={control}
								render={({ field }) => (
									<Select
										value={field.value}
										onValueChange={field.onChange}
									>
										<SelectTrigger className="bg-white/10 border-white/20 text-white">
											<SelectValue placeholder="Select your country" />
										</SelectTrigger>
										<SelectContent className="bg-background border-white/20">
											{countries.map((country) => (
												<SelectItem
													key={country}
													value={country}
												>
													{country}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								)}
							/>
							{errors.country && (
								<p className="text-red-500 text-xs">
									{errors.country.message}
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
						<div className="space-y-1">
							<Label htmlFor="confirmPassword">
								Confirm Password
							</Label>
							<Input
								id="confirmPassword"
								type="password"
								placeholder="Confirm Password"
								className="bg-white/10 border-white/20 text-white"
								{...register("confirmPassword")}
							/>
							{errors.confirmPassword && (
								<p className="text-red-500 text-xs">
									{errors.confirmPassword.message}
								</p>
							)}
						</div>

						<div className="flex flex-row justify-center items-center">
							<span className="text-muted-foreground">
								Already have an account?
							</span>
							<Button
								type="button"
								variant="link"
								onClick={switchToLogin}
								className="text-light-blue"
							>
								Log in
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
						{isLoading ? "Creating Account..." : "Register"}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
