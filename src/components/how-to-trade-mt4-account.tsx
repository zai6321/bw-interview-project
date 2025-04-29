import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from "@/components/ui/carousel";
import Image from "next/image";
import { RegisterButton } from "./register-button";

interface CarouselStep {
	id: number;
	title: string;
	image: string;
}

export function HowToTradeMt4Account() {
	const steps: CarouselStep[] = [
		{
			id: 1,
			title: "Install our app, “Blackwell Invest”",
			image: "/images/step-1.png"
		},
		{
			id: 2,
			title: "Login OR create a new account ",
			image: "/images/step-2.png"
		},
		{
			id: 3,
			title: "Click “Account”",
			image: "/images/step-3.png"
		},
		{
			id: 4,
			title: "Click “Link an account”",
			image: "/images/step-4.png"
		},
		{
			id: 5,
			title: "Select “BlackwellGlobalAsia-Live” server",
			image: "/images/step-5.png"
		},
		{
			id: 6,
			title: "Fill in your Blackwell Global trading account OR create a new account",
			image: "/images/step-6.png"
		},
		{
			id: 7,
			title: "Click “Copy Trades”",
			image: "/images/step-7.png"
		},
		{
			id: 8,
			title: "Click “Done”",
			image: "/images/step-8.png"
		}
	];

	return (
		<div className="py-12 relative">
			<div className="w-full mx-auto px-4 relative z-10">
				<p className="text-4xl md:text-5xl font-title text-light-blue text-center mb-12">
					How To Trade MT4 Account
				</p>
				<div className="flex justify-center">
					<Carousel
						opts={{
							align: "start"
						}}
						className="w-[90%]"
					>
						<CarouselContent>
							{steps.map((step, index) => (
								<CarouselItem
									key={index}
									className="md:basis-1/2 lg:basis-1/3 relative"
								>
									<div className="p-1">
										<Card>
											<CardContent className="flex flex-col items-center gap-4 min-h-[460px]">
												<div className="mt-10">
													<Image
														src={
															step.image ||
															"/placeholder.svg"
														}
														alt={step.title}
														width={300}
														height={300}
														className="object-contain"
													/>
												</div>

												<p className="text-2xl font-title text-center">
													{step.title}
												</p>
											</CardContent>
										</Card>
									</div>
									{index < steps.length - 1 && (
										<>
											<div className="absolute top-1/2 -right-0 md:-right-9 transform -translate-y-1/2 block z-10">
												<Image
													src="/images/arrow.png"
													alt="Next step"
													width={70}
													height={70}
													className="object-contain"
													style={{ width: "auto" }}
												/>
											</div>
										</>
									)}
									{index !== 0 && (
										<div className="absolute top-1/2 left-2 md:-right-8 transform -translate-y-1/2 block z-10 md:hidden">
											<Image
												src="/images/arrow.png"
												alt="Next step"
												width={70}
												height={70}
												className="object-contain"
											/>
										</div>
									)}
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className="ml-5 md:ml-20 bg-[#1d295c]" />
						<CarouselNext className="mr-5 md:mr-20 bg-[#1d295c]" />
					</Carousel>
				</div>
				<div className="flex justify-center my-8">
					<RegisterButton size="large" />
				</div>
			</div>
		</div>
	);
}
