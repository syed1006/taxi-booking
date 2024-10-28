import { useState } from "react";
import { useForm, FormProvider, FieldErrors } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

import TripInformation from "./steps/trip-information";
import DateTime from "./steps/date-time-form";
import VehicleSelection from "./steps/vehicle-selection";
import PassengerInformation from "./steps/passenger-information";
import ContactDetails from "./steps/contact-details";
import Payment from "./steps/payment";
import * as z from "zod";
import {
	BookingFormData,
	contactDetailsSchema,
	dateTimeSchema,
	passengerInfoSchema,
	paymentSchema,
	tripInfoSchema,
	vehicleSchema,
} from "./steps/form-schema";

const steps = [
	{
		title: "Trip Information",
		component: TripInformation,
		schema: tripInfoSchema,
		key: "tripInfo",
	},
	{
		title: "Date & Time",
		component: DateTime,
		schema: dateTimeSchema,
		key: "dateTime",
	},
	{
		title: "Vehicle Selection",
		component: VehicleSelection,
		schema: vehicleSchema,
		key: "vehicle",
	},
	{
		title: "Passenger Information",
		component: PassengerInformation,
		schema: passengerInfoSchema,
		key: "passengerInfo",
	},
	{
		title: "Contact Details",
		component: ContactDetails,
		schema: contactDetailsSchema,
		key: "contactDetails",
	},
	{
		title: "Payment",
		component: Payment,
		schema: paymentSchema,
		key: "payment",
	},
];

export const bookingSchema = z.object({
	tripInfo: tripInfoSchema,
	dateTime: dateTimeSchema,
	vehicle: vehicleSchema,
	passengerInfo: passengerInfoSchema,
	contactDetails: contactDetailsSchema,
	payment: paymentSchema,
});

export default function TaxiBookingForm() {
	const [step, setStep] = useState(0);
	const methods = useForm<BookingFormData>({
		resolver: zodResolver(
			z.object({ [steps[step].key]: steps[step].schema })
		),
		mode: "onChange",
	});

	const { handleSubmit, getValues } = methods;

	const onSubmit = (data: BookingFormData) => {
		console.log("here");
		if (step < steps.length - 1) {
			setStep(step + 1);
		} else {
			console.log("Form submitted:", data, methods.getValues());
			// Here you would typically send the data to your backend
		}
	};

	const onError = (errors: FieldErrors) => {
		console.log("Validation errors:", errors);
	};

	const CurrentStepComponent = steps[step].component;

	return (
		<FormProvider {...methods}>
			<form onSubmit={handleSubmit(onSubmit, onError)}>
				<Card className="w-[350px] sm:w-[400px] md:w-[500px] text-left max-w-full">
					<CardContent className="pt-6">
						<div className="mb-8">
							<Progress
								value={(step / (steps.length - 1)) * 100}
								className="h-2"
							/>
							<div className="mt-2 text-sm text-center text-gray-500">
								Step {step + 1} of {steps.length}:{" "}
								{steps[step].title}
							</div>
						</div>
						<CurrentStepComponent />
					</CardContent>
					<CardFooter className="flex justify-between">
						{step > 0 && (
							<Button
								type="button"
								variant="outline"
								onClick={() => setStep(step - 1)}
							>
								<ChevronLeft className="mr-2 h-4 w-4" />{" "}
								Previous
							</Button>
						)}
						<Button type="submit">
							{step < steps.length - 1 ? (
								<>
									Next{" "}
									<ChevronRight className="ml-2 h-4 w-4" />
								</>
							) : (
								"Submit Booking"
							)}
						</Button>
					</CardFooter>
				</Card>
			</form>
		</FormProvider>
	);
}
