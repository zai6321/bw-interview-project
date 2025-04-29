"use client";

import Image from "next/image";

export function EasyAnalysis() {
	return (
		<div className="w-full mx-auto px-4 py-12">
			<p className="text-4xl font-title text-light-blue text-center mb-6">
				Easy Analysis
			</p>

			<p className="text-gold font-title text-center text-xl max-w-3xl mx-auto">
				Instant clarity on the Masters&apos; profile. Get a snapshot of
				their trade history, profitability, risk, and portfolio all in
				one place.
			</p>

			<div
				className="relative max-w-md mx-auto"
				style={{ height: "600px", maxWidth: "350px" }}
			>
				<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
					<Image
						src="/images/mobile-2.png"
						alt="Trading Analysis Interface"
						width={250}
						height={600}
					/>
				</div>

				{/* left */}
				<div className="absolute top-20 -left-6 z-10">
					<Image
						src="/images/function-1.png"
						alt="Profitability metrics"
						width={200}
						height={100}
					/>
				</div>

				<div className="absolute top-[230px] -left-6 z-10">
					<Image
						src="/images/function-3.png"
						alt="Trade statistics"
						width={200}
						height={100}
					/>
				</div>

				<div className="absolute bottom-[90px] -left-6 z-10">
					<Image
						src="/images/function-5.png"
						alt="Performance chart"
						width={200}
						height={100}
					/>
				</div>

				{/* right */}
				<div className="absolute top-[170px] right-0 z-10">
					<Image
						src="/images/function-2.png"
						alt="Copy button"
						width={180}
						height={100}
						style={{ height: "auto", maxWidth: "180px" }}
					/>
				</div>

				<div className="absolute bottom-1/4 right-0 z-10">
					<Image
						src="/images/function-4.png"
						alt="Market distribution"
						width={180}
						height={100}
						style={{ height: "auto", maxWidth: "180px" }}
					/>
				</div>
			</div>
		</div>
	);
}
