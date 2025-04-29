import Image from "next/image";

export function FastMatching() {
	const features = [
		"Spotlight",
		"Top Strategies",
		"Low Drawdown",
		"Medium Drawdown",
		"High Drawdown",
		"New Strategies"
	];

	return (
		<div className="w-full mx-auto px-4 py-12">
			<p className="text-4xl md:text-5xl font-title text-light-blue text-center mb-12">
				Fast Matching
			</p>

			<div className="flex flex-col lg:flex-row items-center justify-center gap-8">
				<div className="relative">
					<Image
						src="/images/mobile-1.png"
						alt="Fast Trading Interface"
						width={280}
						height={560}
						className="mx-auto rounded-3xl shadow-lg"
					/>
				</div>

				<div className="space-y-6">
					<ul className="space-y-6">
						{features.map((feature, index) => (
							<li
								key={index}
								className="flex items-end justify-center"
							>
								<div>
									<Image
										src="/images/list-icon.png"
										alt="List icon"
										width={106}
										height={35}
									/>
								</div>
								<div className="flex items-center w-full">
									<p className="text-2xl font-subtitle pb-1 ml-2">
										{feature}
									</p>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
