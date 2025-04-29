import Image from "next/image";
import { RegisterButton } from "./register-button";

interface FeatureProps {
	icon: string;
	title: string;
	description: string;
}

function Feature({ icon, title, description }: FeatureProps) {
	return (
		<div className="bg-white rounded-lg p-4 flex flex-col md:flex-row gap-4 shadow-lg items-center justify-center">
			<div className="min-w-[220px] flex justify-start items-center">
				<div className="shrink-0 mt-1">
					<Image
						src={icon || "/placeholder.svg"}
						alt={title}
						width={80}
						height={80}
						style={{ height: "auto" }}
					/>
				</div>
				<p className="text-xl shrink-0 font-title text-dark-blue md:mb-2 min-w-[140px]">
					{title}
				</p>
			</div>
			<p className="w-full font-subtitle text-black">{description}</p>
		</div>
	);
}

export function WhyChooseUs() {
	const features: FeatureProps[] = [
		{
			icon: "/images/icon-1.png",
			title: "Regulated",
			description:
				"The copy trading platform is regulated. Our technology partner is regulated. And so are we, as a brokerage. We operate under strict compliance because your trust and peace of mind are everything."
		},
		{
			icon: "/images/icon-2.png",
			title: "0 Commissions",
			description:
				"When investing, the small margins matter. Blackwell Invest offers 0 commissions investing, and 0 cost to install our app."
		},
		{
			icon: "/images/icon-3.png",
			title: "User-friendly",
			description:
				"With an intuitive interface, easy trade execution, and hassle-free management, copying top traders has never been simpler. Trade smarter, not harder!"
		},
		{
			icon: "/images/icon-4.png",
			title: "Tier 1 liquidity",
			description:
				"Blackwell Invest sources the best liquidity to provide a deep product range and broad market access. Fast order execution and transparent pricing."
		}
	];

	return (
		<div className="py-12 relative md:mt-[400px]">
			{/* Background Image */}
			<div className="absolute -top-10 w-full h-[10%] md:h-[80%] md:-top-[15rem] z-0">
				<Image
					src="/images/bg-2.png"
					alt="Background"
					fill
					className="md:object-cover md:object-center"
					style={{ objectFit: "contain" }}
					priority
				/>
			</div>

			<div className="w-full mx-auto px-4 relative z-10">
				<p className="text-4xl md:text-5xl font-title text-light-blue text-center mb-12">
					Why Choose Us?
				</p>

				<div className="space-y-4 md:mx-20">
					{features.map((feature, idx) => (
						<Feature
							key={idx}
							{...feature}
						/>
					))}
				</div>

				<div className="flex justify-center mt-8">
					<RegisterButton size="large" />
				</div>
			</div>
		</div>
	);
}
