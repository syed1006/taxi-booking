import { InfiniteMovingCards } from "../components/globals/infinite-moving-cards";
import { LampComponent } from "../components/globals/lamp";
import BangaloreIcon from "../components/icons/bangalore-icon";
import DelhiIcon from "../components/icons/delhi-icon";
import HyderabadIcon from "../components/icons/hyderabad-icon";
import KolkattaIcon from "../components/icons/kolkatta-icon";
import MumbaiIcon from "../components/icons/mumbai-icon";
import { ServicesCardsCarousel } from "@/components/services-carousel";
import { ContainerScroll } from "@/components/globals/container-scroll-animation";
import TaxiFormHeader from "@/components/forms/form-header";
import TaxiBookingForm from "@/components/forms/taxi-booking";

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
				<ServicesCardsCarousel />
				<section>
					<ContainerScroll titleComponent={<TaxiFormHeader />}>
						<TaxiBookingForm />
					</ContainerScroll>
				</section>
			</div>
		</main>
	);
};

export default Home;
