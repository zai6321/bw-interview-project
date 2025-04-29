"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { useMobile } from "@/app/hooks/use-mobile";
import AppStoreButtons from "./app-store-buttons";
import { RegisterButton } from "./register-button";

export function CopyTrading() {
	const isMobile = useMobile();

	return (
		<div className="w-full mx-auto px-4 md:py-12 overflow-hidden">
			{isMobile ? (
				// Mobile Layout
				<div className="flex flex-col items-center text-center mt-5 md:mt-0">
					<div className="mb-4 z-10">
						<p className="text-5xl md:text-4xl font-title text-light-blue">
							COPY TRADING
						</p>
						<p className="text-3xl md:text-xl italic font-subtitle text-white">
							with Blackwell Invest
						</p>
					</div>

					<div className="relative mb-6">
						<AppStoreButtons />
						<div className="absolute -right-10 -top-20 md:-right-10 md:-top-2 z-0">
							<Image
								src="/images/regular.png"
								alt="Regulated"
								width={110}
								height={110}
							/>
						</div>
					</div>

					{/* Hand Image */}
					<div className="relative right-[40%] my-4">
						<Image
							src="/images/hand.png"
							alt="Blackwell Invest App"
							width={1200}
							height={700}
							className="max-w-[140%] sm:max-w-[120%]"
							priority
						/>
					</div>

					<div className="relative -top-[10rem] text-end">
						<div className="mt-4 space-y-2 text-end">
							<p className="text-3xl font-title text-light-blue">
								Choose & Trade
							</p>
							<p className="text-3xl font-title text-gold italic">
								Ready-To-Go Strategies
							</p>

							<p className="text-white/90 text-sm">
								Browse and copy hundreds of investment
								strategies developed by master traders! Whether
								you are a pro or beginner, you can now trade
								quicker and more confidently.
							</p>
						</div>

						{/* Badges */}
						<div className="flex flex-wrap justify-center gap-2 my-4">
							<Badge className=" border border-gold rounded-md px-3 py-1 text-xs">
								Forex
							</Badge>
							<Badge className=" border border-orange rounded-md px-3 py-1 text-xs">
								Precious Metals
							</Badge>
							<Badge className=" border border-red-500 rounded-md px-3 py-1 text-xs">
								Oil
							</Badge>
							<Badge className=" border border-light-blue rounded-md px-3 py-1 text-xs">
								Indices
							</Badge>
						</div>

						<div className="flex justify-end mt-4">
							<RegisterButton size="large" />
						</div>
						<p className="text-white/70 text-xs italic mt-2">
							When you invest, your capital is at risk. Be
							prudent.
						</p>
					</div>
				</div>
			) : (
				// Desktop Layout
				<div className="flex flex-col md:flex-row items-start justify-start gap-8 relative">
					<div className="relative w-1/2 left-[-25rem]">
						<Image
							src="/images/hand.png"
							alt="Blackwell Invest App"
							width={1000}
							height={1000}
							className="max-w-[200%]"
						/>
					</div>

					<div className="md:w-1/2 space-y-7 relative z-20 lg:mx-20 md:mt-10">
						<div className="flex flex-col items-center justify-center">
							<p className="text-4xl md:text-6xl font-title text-light-blue text-center">
								COPY TRADING
							</p>
							<p className="text-2xl md:text-4xl font-subtitle italic text-center">
								with Blackwell Invest
							</p>
						</div>

						<div className="flex flex-row justify-center items-center relative mb-6 ">
							<div className="w-fit relative">
								<AppStoreButtons />
								<div className="absolute md:right-[-80px] lg:right-[-100px] -top-2 z-0">
									<Image
										src="/images/regular.png"
										alt="Regulated"
										width={120}
										height={120}
									/>
								</div>
							</div>
						</div>

						<div className="relative z-10 md:pt-10">
							<p className="text-2xl md:text-3xl font-title text-light-blue">
								Choose & Trade
							</p>
							<p className="text-xl md:text-2xl font-title text-gold">
								Ready-To-Go Strategies
							</p>
							<p className="font-subtitle">
								Browse and copy hundreds of investment
								strategies developed by master traders! Whether
								you are a pro or beginner, you can now trade
								quicker and more confidently.
							</p>
						</div>

						<div className="flex flex-wrap justify-start gap-2 my-4">
							<Badge className=" border border-gold rounded-md px-3 py-1 text-xs">
								Forex
							</Badge>
							<Badge className=" border border-orange rounded-md px-3 py-1 text-xs">
								Precious Metals
							</Badge>
							<Badge className=" border border-red-500 rounded-md px-3 py-1 text-xs">
								Oil
							</Badge>
							<Badge className=" border border-light-blue rounded-md px-3 py-1 text-xs">
								Indices
							</Badge>
						</div>
						<div className="flex justify-start">
							<RegisterButton size="large" />
						</div>
						<p className="text-sm italic relative z-10">
							When you invest, your capital is at risk. Be
							prudent.
						</p>
					</div>
				</div>
			)}
		</div>
	);
}
