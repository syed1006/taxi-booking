import { LampComponent } from "../components/globals/lamp";
import { ServicesCardsCarousel } from "@/components/services-carousel";
import { ContainerScroll } from "@/components/globals/container-scroll-animation";
import TaxiFormHeader from "@/components/forms/form-header";
import TaxiBookingForm from "@/components/forms/taxi-booking";
import ScrollingIconsContainer from "@/components/scrolling-icons-container/scrolling-icons-container";
import Navbar from "./components/navbar";

const Home = () => {
	return (
		<main className="dark:bg-gray-900">
			<Navbar />
			<div className="p-4">
				<section>
					<LampComponent />
				</section>
				<ScrollingIconsContainer />
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
