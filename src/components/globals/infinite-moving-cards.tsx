import { cn } from "@/lib/utils";
import React, { SVGProps, useEffect, useState } from "react";
import MonumentIcon from "../icons/monument-icon";

// Define the type for props outside of the component
type InfiniteMovingCardsProps = {
	items: Array<{
		iconComponent: React.FC<SVGProps<SVGSVGElement>>;
		name: string;
	}>;
	direction?: "left" | "right";
	speed?: "fast" | "normal" | "slow";
	pauseOnHover?: boolean;
	className?: string;
	theme?: "light" | "dark";
};

export const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
	items,
	direction = "left",
	speed = "fast",
	pauseOnHover = true,
	className,
	theme = "dark",
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const scrollerRef = React.useRef<HTMLUListElement>(null);

	useEffect(() => {
		addAnimation();
	}, []);

	const [start, setStart] = useState(false);

	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	}

	const getDirection = () => {
		if (containerRef.current) {
			containerRef.current.style.setProperty(
				"--animation-direction",
				direction === "left" ? "forwards" : "reverse"
			);
		}
	};

	const getSpeed = () => {
		if (containerRef.current) {
			let duration = "40s";
			if (speed === "fast") duration = "20s";
			else if (speed === "slow") duration = "80s";

			containerRef.current.style.setProperty(
				"--animation-duration",
				duration
			);
		}
	};

	return (
		<div
			ref={containerRef}
			className={cn(
				"scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
				className
			)}
		>
			<ul
				ref={scrollerRef}
				className={cn(
					"flex min-w-full shrink-0 gap-10 py-4 w-max flex-nowrap",
					start && "animate-scroll",
					pauseOnHover && "hover:[animation-play-state:paused]"
				)}
			>
				{items.map((item, index) => (
					<MonumentIcon
						key={index}
						icon={
							<item.iconComponent
								stroke={theme === "dark" ? "grey" : ""}
								width={290}
								height={290}
							/>
						}
						name={item.name}
					/>
				))}
			</ul>
		</div>
	);
};
