"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import AppStoreButtons from "./app-store-buttons";

export function NavigateOurApp() {
	const [activeTab, setActiveTab] = useState("discover");

	const handleTabChange = (value: string) => {
		setActiveTab(value);
	};

	const tabItems = [
		{
			value: "discover",
			icon: {
				default: "/images/icon1.png",
				active: "/images/icon1-blue.png",
				width: 40,
				height: 40
			},
			title: "Discover",
			description:
				"Explore all the investment Masters available on Blackwell Invest. Dive into their profiles and analyse their profitability at a glance.",
			image: {
				src: "/images/reason-1.png",
				alt: "Discover screen",
				width: 600,
				height: 400
			}
		},
		{
			value: "activity",
			icon: {
				default: "/images/icon2.png",
				active: "/images/icon2-blue.png",
				width: 50,
				height: 50
			},
			title: "Activity",
			description:
				"See the past trades made by the signals you are copying from the last 30 days or track their open positions. Monitor their strategy, and make informed decisions with timely updates of the trades shaping your portfolio.",
			image: {
				src: "/images/reason-2.png",
				alt: "Activity screen",
				width: 600,
				height: 400
			}
		},
		{
			value: "trade",
			icon: {
				default: "/images/icon3.png",
				active: "/images/icon3-blue.png",
				width: 50,
				height: 50
			},
			title: "Trade",
			description:
				"Seamlessly trade oil CFDs, indices, and currency pairs with ease.",
			image: {
				src: "/images/reason-3.png",
				alt: "Trade screen",
				width: 600,
				height: 400
			}
		},
		{
			value: "positions",
			icon: {
				default: "/images/icon4.png",
				active: "/images/icon4-blue.png",
				width: 50,
				height: 50
			},
			title: "Positions",
			description:
				"Easily track the status of all your trades and monitor your account metrics in real-time.",
			image: {
				src: "/images/reason-4.png",
				alt: "Positions screen",
				width: 600,
				height: 400
			}
		},
		{
			value: "account",
			icon: {
				default: "/images/icon5.png",
				active: "/images/icon5-blue.png",
				width: 50,
				height: 50
			},
			title: "Account",
			description:
				"Access detailed information about your trading account, monitor copier drawdown levels, assess your profitability, and keep track of your trade performance - all in one place!",
			image: {
				src: "/images/reason-5.png",
				alt: "Account screen",
				width: 600,
				height: 400
			}
		}
	];

	return (
		<div className="py-12">
			<div className="w-full mx-auto px-4">
				<p className="text-4xl font-title text-light-blue text-center mb-12">
					Navigate Our App in 5 Clicks
				</p>

				<div className="md:mx-20">
					<Tabs
						defaultValue="discover"
						className="w-full"
						onValueChange={handleTabChange}
					>
						<TabsList className="bg-white rounded-t-lg rounded-b-none overflow-hidden p-0 h-[50px]">
							{tabItems.map((tab) => (
								<TabsTrigger
									key={tab.value}
									value={tab.value}
									className="py-4 data-[state=active]:bg-gold"
								>
									<div className="flex items-center justify-center">
										<Image
											src={
												activeTab === tab.value
													? tab.icon.default
													: tab.icon.active
											}
											alt={tab.title}
											width={tab.icon.width}
											height={tab.icon.height}
											style={{ height: "auto" }}
										/>
									</div>
								</TabsTrigger>
							))}
						</TabsList>
						<div className="bg-gold p-6 rounded-lg rounded-tl-none pb-0">
							{tabItems.map((tab) => (
								<TabsContent
									key={tab.value}
									value={tab.value}
									className="mt-0"
								>
									<div className="flex flex-col md:flex-row gap-6 md:ps-10">
										<div className="md:w-[60%] flex flex-col justify-center">
											<p className="text-2xl font-title text-dark-blue mb-4">
												{tab.title}
											</p>
											<p className="font-subtitle text-black">
												{tab.description}
											</p>
										</div>
										<div>
											<Image
												src={tab.image.src}
												alt={`${tab.image.alt} screen`}
												width={tab.image.width}
												height={tab.image.height}
											/>
										</div>
									</div>
								</TabsContent>
							))}
						</div>
					</Tabs>

					<AppStoreButtons className="justify-center mt-10" />
				</div>
			</div>
		</div>
	);
}
