import Image from "next/image";
import { cn } from "@/lib/utils";

type AppStoreButtonsProps = {
	googlePlayUrl?: string;
	appStoreUrl?: string;
	className?: string;
	buttonSize?: "small" | "medium" | "large";
};

export default function AppStoreButtons({
	googlePlayUrl = "https://play.google.com/store/apps",
	appStoreUrl = "https://apps.apple.com",
	className = "",
	buttonSize = "medium"
}: AppStoreButtonsProps) {
	const sizes = {
		small: "h-8",
		medium: "h-10",
		large: "h-12"
	};

	const buttonHeight = sizes[buttonSize];

	return (
		<div className={cn("flex gap-2 z-10 relative", className)}>
			{googlePlayUrl && (
				<a
					href={googlePlayUrl}
					target="_blank"
				>
					<Image
						src="/images/google-play.jpg"
						alt="Google Play"
						width={120}
						height={40}
						style={{ height: "auto" }}
						className={cn("w-auto rounded-md", buttonHeight)}
					/>
				</a>
			)}
			{appStoreUrl && (
				<a
					href={appStoreUrl}
					target="_blank"
				>
					<Image
						src="/images/app-store.jpg"
						alt="App Store"
						width={120}
						height={40}
						style={{ height: "auto" }}
						className={cn("w-auto rounded-md", buttonHeight)}
					/>
				</a>
			)}
		</div>
	);
}
