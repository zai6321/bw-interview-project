"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select";
import { toast } from "sonner";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import Image from "next/image";

const formSchema = z.object({
	name: z
		.string()
		.min(1, "Name is required")
		.min(2, "Name must be at least 2 characters"),
	email: z
		.string()
		.min(1, "Email is required")
		.email("Invalid email address"),
	mobile: z
		.string()
		.min(1, "Mobile number is required")
		.min(8, "Mobile number must be at least 8 characters"),
	country: z.string().min(1, "Country is required"),
	message: z.string().optional()
});

type FormData = z.infer<typeof formSchema>;

export function EnquiryForm() {
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		reset
	} = useForm<FormData>({
		resolver: zodResolver(formSchema),
		mode: "onChange",
		defaultValues: {
			name: "",
			email: "",
			mobile: "",
			country: "",
			message: ""
		}
	});

	const onSubmit = async (data: FormData) => {
		setIsLoading(true);

		try {
			await new Promise((resolve) => setTimeout(resolve, 1500));
			console.log(data);
			toast.success("Enquiry submitted", {
				description: `${data.name} Thank you for your enquiry. We will get back to you shortly.`
			});

			// Reset form
			reset();
		} catch (error) {
			toast.error("Submission failed", {
				description:
					"There was an error submitting your enquiry. Please try again."
			});
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="py-12 relative mt-[100px] md:mt-[200px]">
			<div className="absolute -top-20 w-full h-[112%] z-0">
				<Image
					src="/images/bg-3.png"
					alt="Background"
					fill
				/>
			</div>

			<div className="w-full mx-auto px-4 relative z-10">
				<p className="text-4xl md:text-5xl font-title text-light-blue text-center mb-12">
					Enquire Now
				</p>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="md:mx-20 space-y-6"
				>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="space-y-2">
							<Label htmlFor="name">Name</Label>
							<Input
								id="name"
								{...register("name")}
								placeholder="Name"
								className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-14"
							/>
							{errors.name && (
								<p className="text-red-400 text-sm">
									{errors.name.message}
								</p>
							)}
						</div>

						<div className="space-y-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								type="email"
								{...register("email")}
								placeholder="Email"
								className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-14"
							/>
							{errors.email && (
								<p className="text-red-400 text-sm">
									{errors.email.message}
								</p>
							)}
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="space-y-2">
							<Label htmlFor="mobile">Mobile No.</Label>
							<Input
								id="mobile"
								{...register("mobile")}
								placeholder="Mobile No."
								className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-14"
							/>
							{errors.mobile && (
								<p className="text-red-400 text-sm">
									{errors.mobile.message}
								</p>
							)}
						</div>

						<div className="space-y-2">
							<Label htmlFor="country">
								Country of Residence
							</Label>
							<Controller
								name="country"
								control={control}
								render={({ field }) => (
									<Select
										value={field.value}
										onValueChange={field.onChange}
									>
										<SelectTrigger className="bg-white/10 border-white/20 text-white h-14">
											<SelectValue placeholder="Country of Residence" />
										</SelectTrigger>
										<SelectContent className="bg-[#3A53BA] border-white/20">
											<SelectItem value="Malaysia">
												Malaysia
											</SelectItem>
											<SelectItem value="Vietnam">
												Vietnam
											</SelectItem>
											<SelectItem value="Thailand">
												Thailand
											</SelectItem>
											<SelectItem value="Others">
												Others
											</SelectItem>
										</SelectContent>
									</Select>
								)}
							/>
							{errors.country && (
								<p className="text-red-400 text-sm">
									{errors.country.message}
								</p>
							)}
						</div>
					</div>

					<div className="space-y-2">
						<Label htmlFor="message">Message</Label>
						<Textarea
							id="message"
							{...register("message")}
							placeholder="Enter your message here"
							className="bg-white/10 border-white/20 text-white placeholder:text-white/60 min-h-[150px]"
						/>
					</div>

					<div className="flex justify-center pt-4">
						<Button
							type="submit"
							className="orange-button"
							disabled={isLoading}
						>
							{isLoading ? "Submitting..." : "Submit"}
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}
