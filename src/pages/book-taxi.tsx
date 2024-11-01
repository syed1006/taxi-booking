import TaxiFormHeader from "@/components/forms/form-header";
import TaxiBookingForm from "@/components/forms/taxi-booking";
import { ContainerScroll } from "@/components/globals/container-scroll-animation";

const BookTaxi = () => {
	return (
		<main>
			<section>
				<ContainerScroll titleComponent={<TaxiFormHeader />}>
					<TaxiBookingForm />
				</ContainerScroll>
			</section>
		</main>
	);
};

export default BookTaxi;
