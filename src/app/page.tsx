import { Header } from "@/components/header";
import { CopyTrading } from "@/components/copy-trading";
import { EasyAnalysis } from "@/components/easy-analysis";
import { FastMatching } from "@/components/fast-matching";
import { TradeLikeAPro } from "@/components/trade-like-a-pro";
import { WhyChooseUs } from "@/components/why-choose-us";
import { NavigateOurApp } from "@/components/navigate-our-app";
import { EnquiryForm } from "@/components/enquiry-form";
import { HowToTradeMt4Account } from "@/components/how-to-trade-mt4-account";

export default function Home() {
	return (
		<main className="min-h-screen flex flex-col">
			<Header />
			<div className="md:mx-10 lg:mx-20 md:shadow-xl md:mb-20">
				<CopyTrading />
				<FastMatching />
				<EasyAnalysis />
				<TradeLikeAPro />
				<HowToTradeMt4Account />
				<WhyChooseUs />
				<NavigateOurApp />
				<EnquiryForm />
			</div>
		</main>
	);
}
