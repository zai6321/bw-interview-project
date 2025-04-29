"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
	targetDate: Date;
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	});

	useEffect(() => {
		const calculateTimeLeft = () => {
			const difference = targetDate.getTime() - new Date().getTime();

			if (difference > 0) {
				setTimeLeft({
					days: Math.floor(difference / (1000 * 60 * 60 * 24)),
					hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
					minutes: Math.floor((difference / 1000 / 60) % 60),
					seconds: Math.floor((difference / 1000) % 60)
				});
			} else {
				setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
			}
		};

		calculateTimeLeft();
		const timer = setInterval(calculateTimeLeft, 1000);

		return () => clearInterval(timer);
	}, [targetDate]);

	return (
		<div className="flex space-x-4">
			<div className="countdown-item">
				<div className="countdown-value">
					{String(timeLeft.days).padStart(2, "0")}
				</div>
				<div className="countdown-label">Days</div>
			</div>
			<div className="countdown-value">:</div>
			<div className="countdown-item">
				<div className="countdown-value">
					{String(timeLeft.hours).padStart(2, "0")}
				</div>
				<div className="countdown-label">Hours</div>
			</div>
			<div className="countdown-value">:</div>
			<div className="countdown-item">
				<div className="countdown-value">
					{String(timeLeft.minutes).padStart(2, "0")}
				</div>
				<div className="countdown-label">Minutes</div>
			</div>
			<div className="countdown-value">:</div>
			<div className="countdown-item">
				<div className="countdown-value">
					{String(timeLeft.seconds).padStart(2, "0")}
				</div>
				<div className="countdown-label">Seconds</div>
			</div>
		</div>
	);
}
