"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

export function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false);

	// Show button when page is scrolled down
	const toggleVisibility = () => {
		if (window.pageYOffset > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	// Set the scroll event listener
	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	// Scroll to top function
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};

	return (
		<>
			{isVisible && (
				<Button
					onClick={scrollToTop}
					className="fixed bottom-6 right-6 z-50 bg-orange text-white hover:bg-orange rounded-lg p-3 shadow-lg"
					aria-label="Scroll to top"
				>
					<ChevronUp className="h-10 w-10" />
				</Button>
			)}
		</>
	);
}
