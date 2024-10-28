import "./App.css";
import TaxiBookingForm from "./components/forms/taxi-booking";
import { ContainerScroll } from "./components/globals/container-scroll-animation";
import { InfiniteMovingCards } from "./components/globals/infinite-moving-cards";
import { LampComponent } from "./components/globals/lamp";
import BangaloreIcon from "./components/icons/bangalore-icon";
import DelhiIcon from "./components/icons/delhi-icon";
import HyderabadIcon from "./components/icons/hyderabad-icon";
import KolkattaIcon from "./components/icons/kolkatta-icon";
import MumbaiIcon from "./components/icons/mumbai-icon";

function App() {
	const items = [
		{ icon: <KolkattaIcon width={290} height={290} /> },
		{ icon: <MumbaiIcon width={290} height={290} /> },
		{ icon: <HyderabadIcon width={290} height={290} /> },
	];
	// return <ContainerScroll bodyComponent={<TaxiBookingForm />} />;
	return <InfiniteMovingCards items={items} speed="normal" />;
}

export default App;
