import "./App.css";
import TaxiBookingForm from "./components/forms/taxi-booking";
import { ContainerScroll } from "./components/globals/container-scroll-animation";
import { LampComponent } from "./components/globals/lamp";
import BangaloreIcon from "./components/icons/bangalore-icon";
import DelhiIcon from "./components/icons/delhi-icon";
import HyderabadIcon from "./components/icons/hyderabad-icon";
import KolkattaIcon from "./components/icons/kolkatta-icon";
import MumbaiIcon from "./components/icons/mumbai-icon";

function App() {
	// return <ContainerScroll bodyComponent={<TaxiBookingForm />} />;
	return <KolkattaIcon width={290} height={290} />;
}

export default App;
