"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CountdownTimer } from "@/components/countdown-timer";
import { useMobile } from "@/app/hooks/use-mobile";
import { RegisterButton } from "@/components/register-button";
import { LoginButton } from "@/components/login-button";
import Image from "next/image";
import { useAuth } from "@/app/providers/auth-provider";
import { toast } from "sonner";

export function Header() {
	const { user, logout } = useAuth();
	const isMobile = useMobile();

	const handleLogout = async () => {
		try {
			await logout();
			toast.success("Logged out successfully", {
				description: "You have been logged out."
			});
		} catch (error) {
			toast.error("Logout failed", {
				description: "There was an error when logging out."
			});
			console.error("Logout failed:", error);
		}
	};

	const targetDate = new Date(
		process.env.NEXT_PUBLIC_PROMOTION_END_DATE ?? "2025-07-01"
	);

	return (
		<header className="sticky top-0 z-50 w-full bg-[#0a1f4d] shadow-md">
			<div className="w-full md:px-20 flex items-center justify-between py-2 px-4">
				<div className="flex items-center">
					<Image
						src="/images/blackwell-logo.png"
						alt="Blackwell Global"
						width={180}
						height={40}
						className="h-10 w-auto"
					/>
				</div>

				{!isMobile && (
					<div className="flex flex-col items-center">
						<div className="text-xs text-white/80 uppercase mb-1">
							PROMOTION ENDS IN
						</div>
						<CountdownTimer targetDate={targetDate} />
					</div>
				)}

				<div className="flex items-center justify-end gap-2 w-1/4">
					{user ? (
						<div className="md:flex gap-2 justify-center items-center hidden">
							<p className="flex flex-wrap  overflow-hidden text-ellipsis">
								Hi {user.firstName} {user.lastName}, welcome to
								Blackwell, please verify your email immediately.
							</p>
							<Button
								onClick={handleLogout}
								variant="outline"
								className="bg-orange text-white hover:bg-orange/90 border-none"
							>
								Logout
							</Button>
						</div>
					) : (
						<>
							<LoginButton className="hidden md:inline-flex" />
							<RegisterButton className="hidden md:inline-flex" />
						</>
					)}

					{isMobile && (
						<Sheet>
							<SheetTrigger asChild>
								<Button
									variant="ghost"
									size="icon"
									className="text-white"
								>
									<Menu className="h-6 w-6" />
								</Button>
							</SheetTrigger>
							<SheetContent>
								<div className="flex flex-col gap-4 mt-8">
									<div className="text-xs text-white/80 uppercase mb-1">
										PROMOTION ENDS IN
									</div>
									<CountdownTimer targetDate={targetDate} />
									{user ? (
										<div className="flex flex-col gap-3">
											<p>
												Hi {user.firstName}{" "}
												{user.lastName}, welcome to
												Blackwell, please verify your
												email immediately.
											</p>
											<Button
												onClick={handleLogout}
												variant="outline"
												className="w-full bg-orange"
											>
												Logout
											</Button>
										</div>
									) : (
										<>
											<LoginButton className="w-full bg-dark-blue" />
											<RegisterButton className="w-full" />
										</>
									)}
								</div>
							</SheetContent>
						</Sheet>
					)}
				</div>
			</div>
		</header>
	);
}
