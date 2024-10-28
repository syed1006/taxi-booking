import { useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BookingFormData } from "./form-schema";

export default function PassengerInformation() {
	const {
		register,
		formState: { errors },
	} = useFormContext<BookingFormData>();

	return (
		<div className="space-y-4">
			<div className="space-y-2">
				<Label htmlFor="passengers">Number of Passengers</Label>
				<Input
					id="passengers"
					type="number"
					{...register("passengerInfo.passengers", {
						valueAsNumber: true,
					})}
				/>
				{errors.passengerInfo?.passengers && (
					<p className="text-red-500 text-sm">
						{errors.passengerInfo.passengers.message}
					</p>
				)}
			</div>
			<div className="space-y-2">
				<Label htmlFor="specialRequests">
					Special Requests (Optional)
				</Label>
				<Textarea
					id="specialRequests"
					{...register("passengerInfo.specialRequests")}
				/>
			</div>
		</div>
	);
}
