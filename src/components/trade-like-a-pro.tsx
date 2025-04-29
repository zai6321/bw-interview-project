"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import AppStoreButtons from "./app-store-buttons";

interface Step {
	number: number;
	title: string;
	image: string;
}

export function TradeLikeAPro() {
	const [activeStep, setActiveStep] = useState(1);

	const steps: Step[] = [
		{
			number: 1,
			title: "Install our app, “Blackwell Invest”",
			image: "/images/guide-1.png"
		},
		{
			number: 2,
			title: "Choose a signal Master and click “Copy”",
			image: "/images/guide-2.png"
		},
		{
			number: 3,
			title: "Set your trade size preferences",
			image: "/images/guide-3.png"
		},
		{
			number: 4,
			title: "Click “Agree and Copy”",
			image: "/images/guide-4.png"
		}
	];

	return (
		<div className="py-12 relative md:mt-[400px]">
			{/* Background Image */}
			<div className="absolute -top-10 w-full h-[10%] md:h-[125%] md:-top-[23rem] z-0">
				<Image
					src="/images/bg-1.png"
					alt="Background"
					fill
					className="md:object-cover md:object-center"
					priority
				/>
			</div>

			<div className="w-full mx-auto px-4 relative z-10">
				<p className="text-4xl md:text-5xl font-title text-light-blue text-center mb-12">
					Trade Like a Pro in Minutes
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:mx-20">
					<div className="space-y-4">
						{steps.map((step) => (
							<div
								key={step.number}
								onClick={() => setActiveStep(step.number)}
								className={cn(
									"rounded-lg p-6 cursor-pointer border-2",
									step.number % 2
										? "border-gold"
										: "border-orange"
								)}
							>
								<div className="flex items-center gap-10">
									<div
										className={cn(
											"  flex items-center justify-center italic text-4xl font-title",
											step.number % 2
												? " text-light-blue"
												: " text-orange"
										)}
									>
										{step.number}
									</div>
									<p
										className={cn(
											"text-xl font-title",
											activeStep === step.number
												? "text-light-blue"
												: "text-white"
										)}
									>
										{step.title}
									</p>
								</div>
								<div className="flex justify-center">
									<Image
										key={step.number}
										src={step.image}
										alt={`Step ${step.number}: ${step.title}`}
										width={300}
										height={200}
										className={cn(
											"md:hidden",
											activeStep === step.number
												? "block"
												: "hidden"
										)}
									/>
								</div>
							</div>
						))}
					</div>

					<div className="rounded-xl p-6 md:flex-col border-2 hidden md:flex">
						<div className="flex-1 flex items-center justify-center">
							<div className="relative max-w-xs mx-auto">
								<div className="relative z-10 bg-white rounded-t-3xl p-2 shadow-2xl">
									{steps.map((step) => (
										<Image
											key={step.number}
											src={step.image}
											alt={`Step ${step.number}: ${step.title}`}
											width={300}
											height={200}
											className={cn(
												"rounded-2xl",
												activeStep === step.number
													? "block"
													: "hidden"
											)}
										/>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>

				<AppStoreButtons className="justify-center mt-10" />
			</div>
		</div>
	);
}
