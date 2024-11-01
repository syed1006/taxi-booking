import { Carousel, Card } from "@/components/ui/cards-carousel";
import { PlanCard } from "../plan-cards/plan-cards";

export function ServicesCardsCarousel() {
	const cards = data.map((card, index) => (
		<Card key={card.src} card={card} index={index} />
	));

	return (
		<div className="w-full h-full py-20">
			<h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
				Ride Options to Suit Every Need.
			</h2>
			<Carousel items={cards} />
		</div>
	);
}

const DummyContent = () => {
	return (
		<>
			{[...new Array(3).fill(1)].map((_, idx) => {
				return <PlanCard key={idx} />;
			})}
		</>
	);
};

const data = [
	{
		category: "Airport Pickup/Drop",
		title: "Seamless Transfers, Every Time.",
		src: "https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		content: <DummyContent />,
	},
	{
		category: "Outstation Bookings",
		title: "Beyond City Limits, Boundless Adventures.",
		src: "https://images.unsplash.com/photo-1701569920445-c61b9e795d64?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		content: <DummyContent />,
	},
	{
		category: "Disposal Packages",
		title: "Flexibility at Your Service.",
		src: "https://images.unsplash.com/photo-1516083649464-1740d081bc44?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		content: <DummyContent />,
	},

	{
		category: "City Local Packages",
		title: "Your City, Your Ride, Your Way.",
		src: "https://plus.unsplash.com/premium_photo-1697729606469-027395aadb6f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		content: <DummyContent />,
	},
	{
		category: "Corporate Bookings",
		title: "Professional Service for Professional Needs.",
		src: "https://plus.unsplash.com/premium_photo-1673380327485-c00f4bd44191?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		content: <DummyContent />,
	},
	{
		category: "One-Way Drop",
		title: "Pay for Just the One-Way Ride",
		src: "https://images.unsplash.com/photo-1542335444-fa9d12e46729?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		content: <DummyContent />,
	},
];
