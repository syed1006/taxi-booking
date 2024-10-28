import "./App.css";
import TaxiBookingForm from "./components/forms/taxi-booking";
import { ContainerScroll } from "./components/globals/container-scroll-animation";
import { LampComponent } from "./components/globals/lamp";

function App() {
	return <ContainerScroll bodyComponent={<TaxiBookingForm />} />;
}

export default App;
