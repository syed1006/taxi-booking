import { useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { BookingFormData } from "./form-schema";

export default function ContactDetails() {
	const {
		register,
		formState: { errors },
	} = useFormContext<BookingFormData>();

	return (
		<div className="space-y-4">
			<div className="space-y-2">
				<Label htmlFor="fullName">Full Name</Label>
				<Input id="fullName" {...register("contactDetails.fullName")} />
				{errors.contactDetails?.fullName && (
					<p className="text-red-500 text-sm">
						{errors.contactDetails.fullName.message}
					</p>
				)}
			</div>
			<div className="space-y-2">
				<Label htmlFor="mobileNumber">Mobile Number</Label>
				<Input
					id="mobileNumber"
					{...register("contactDetails.mobileNumber")}
				/>
				{errors.contactDetails?.mobileNumber && (
					<p className="text-red-500 text-sm">
						{errors.contactDetails.mobileNumber.message}
					</p>
				)}
			</div>
		</div>
	);
}
