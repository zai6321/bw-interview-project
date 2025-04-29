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
							<TabsTrigger
								value="discover"
								className="py-4 data-[state=active]:bg-gold"
							>
								<div className="flex items-center justify-center">
									<Image
										src={
											activeTab === "discover"
												? "/images/icon1-blue.png"
												: "/images/icon1.png"
										}
										alt="Discover"
										width={40}
										height={40}
										style={{ height: "auto" }}
									/>
								</div>
							</TabsTrigger>
							<TabsTrigger
								value="activity"
								className="py-4 data-[state=active]:bg-gold"
							>
								<div className="flex items-center justify-center">
									<Image
										src={
											activeTab === "activity"
												? "/images/icon2-blue.png"
												: "/images/icon2.png"
										}
										alt="Activity"
										width={50}
										height={50}
										style={{ width: "auto" }}
									/>
								</div>
							</TabsTrigger>
							<TabsTrigger
								value="trade"
								className="py-4 data-[state=active]:bg-gold"
							>
								<div className="flex items-center justify-center">
									<Image
										src={
											activeTab === "trade"
												? "/images/icon3-blue.png"
												: "/images/icon3.png"
										}
										alt="Trade"
										width={50}
										height={50}
										style={{ width: "auto" }}
									/>
								</div>
							</TabsTrigger>
							<TabsTrigger
								value="positions"
								className="py-4 data-[state=active]:bg-gold"
							>
								<div className="flex items-center justify-center">
									<Image
										src={
											activeTab === "positions"
												? "/images/icon4-blue.png"
												: "/images/icon4.png"
										}
										alt="Positions"
										width={50}
										height={50}
										style={{ width: "auto" }}
									/>
								</div>
							</TabsTrigger>
							<TabsTrigger
								value="account"
								className="py-4 data-[state=active]:bg-gold"
							>
								<div className="flex items-center justify-center ">
									<Image
										src={
											activeTab === "account"
												? "/images/icon5-blue.png"
												: "/images/icon5.png"
										}
										alt="Account"
										width={50}
										height={50}
										style={{ width: "auto" }}
									/>
								</div>
							</TabsTrigger>
						</TabsList>
						<div className="bg-gold p-6 rounded-lg rounded-tl-none pb-0">
							<TabsContent
								value="discover"
								className="mt-0"
							>
								<div className="flex flex-col md:flex-row gap-6 md:ps-10">
									<div className="md:w-[60%] flex flex-col justify-center">
										<p className="text-2xl font-title text-dark-blue mb-4">
											Discover
										</p>
										<p className="font-subtitle text-black">
											Explore all the investment Masters
											available on Blackwell Invest. Dive
											into their profiles and analyse
											their profitability at a glance.
										</p>
									</div>
									<div>
										<Image
											src="/images/reason-1.png"
											alt="Discover screen"
											width={600}
											height={400}
										/>
									</div>
								</div>
							</TabsContent>
							<TabsContent
								value="activity"
								className="mt-0"
							>
								<div className="flex flex-col md:flex-row gap-6 md:ps-10">
									<div className="md:w-[60%] flex flex-col justify-center">
										<p className="text-2xl font-title text-dark-blue mb-4">
											Activity
										</p>
										<p className="font-subtitle text-black">
											See the past trades made by the
											signals you are copying from the
											last 30 days or track their open
											positions. Monitor their strategy,
											and make informed decisions with
											timely updates of the trades shaping
											your portfolio.
										</p>
									</div>
									<div className="relative">
										<Image
											src="/images/reason-2.png"
											alt="Activity screen"
											width={600}
											height={400}
										/>
									</div>
								</div>
							</TabsContent>
							<TabsContent
								value="trade"
								className="mt-0"
							>
								<div className="flex flex-col md:flex-row gap-6 md:ps-10">
									<div className="md:w-[60%] flex flex-col justify-center">
										<p className="text-2xl font-title text-dark-blue mb-4">
											Trade
										</p>
										<p className="font-subtitle text-black">
											Seamlessly trade oil CFDs, indices,
											and currency pairs with ease.
										</p>
									</div>
									<div>
										<Image
											src="/images/reason-3.png"
											alt="Trade screen"
											width={600}
											height={400}
										/>
									</div>
								</div>
							</TabsContent>
							<TabsContent
								value="positions"
								className="mt-0"
							>
								<div className="flex flex-col md:flex-row gap-6 md:ps-10">
									<div className="md:w-[60%] flex flex-col justify-center">
										<p className="text-2xl font-title text-dark-blue mb-4">
											Positions
										</p>
										<p className="text-black font-subtitle">
											Easily track the status of all your
											trades and monitor your account
											metrics in real-time.
										</p>
									</div>
									<div>
										<Image
											src="/images/reason-4.png"
											alt="Positions screen"
											width={600}
											height={400}
										/>
									</div>
								</div>
							</TabsContent>
							<TabsContent
								value="account"
								className="mt-0"
							>
								<div className="flex flex-col md:flex-row gap-6 md:ps-10">
									<div className="md:w-[60%] flex flex-col justify-center">
										<p className="text-2xl font-title text-dark-blue mb-4">
											Account
										</p>
										<p className="text-black font-subtitle">
											Access detailed information about
											your trading account, monitor copier
											drawdown levels, assess your
											profitability, and keep track of
											your trade performance - all in one
											place!
										</p>
									</div>
									<div>
										<Image
											src="/images/reason-5.png"
											alt="Account screen"
											width={600}
											height={400}
										/>
									</div>
								</div>
							</TabsContent>
						</div>
					</Tabs>

					<AppStoreButtons className="justify-center mt-10" />
				</div>
			</div>
		</div>
	);
}
