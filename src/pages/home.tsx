import { ThreeDCardDemo } from "@/components/plan-cards/plan-cards";
import { InfiniteMovingCards } from "../components/globals/infinite-moving-cards";
import { LampComponent } from "../components/globals/lamp";
import BangaloreIcon from "../components/icons/bangalore-icon";
import DelhiIcon from "../components/icons/delhi-icon";
import HyderabadIcon from "../components/icons/hyderabad-icon";
import KolkattaIcon from "../components/icons/kolkatta-icon";
import MumbaiIcon from "../components/icons/mumbai-icon";

const Home = () => {
	const items = [
		{ name: "Hyderabad", iconComponent: HyderabadIcon },
		{ name: "Mumbai", iconComponent: MumbaiIcon },
		{ name: "Bangalore", iconComponent: BangaloreIcon },
		{ name: "Delhi", iconComponent: DelhiIcon },
		{ name: "Kolkata", iconComponent: KolkattaIcon },
	];

	return (
		<main className="h-screen">
			<header className="h-10 bg-slate-500 sticky top-0 z-[100]">
				{/* Header Content */}
			</header>
			<div className="p-4">
				<section>
					<LampComponent />
				</section>
				<section className=" flex justify-center">
					<InfiniteMovingCards items={items} speed="normal" />
				</section>
				<ThreeDCardDemo />
			</div>
		</main>
	);
};

export default Home;
