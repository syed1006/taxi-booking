import { useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { BookingFormData, serviceOptions, ServiceType } from "./form-schema";

export default function TripInformation() {
	const {
		register,
		formState: { errors },
		setValue,
		watch,
	} = useFormContext<BookingFormData>();

	const serviceTypeValue = watch("tripInfo.serviceType");

	return (
		<div className="space-y-4">
			<div className="space-y-2">
				<Label htmlFor="serviceType">Service Type</Label>
				<Select
					onValueChange={(value) =>
						setValue("tripInfo.serviceType", value as ServiceType)
					}
					value={serviceTypeValue}
				>
					<SelectTrigger>
						<SelectValue placeholder="Select service type" />
					</SelectTrigger>
					<SelectContent>
						{serviceOptions.map((option) => (
							<SelectItem key={option.value} value={option.value}>
								{option.label}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				{errors.tripInfo?.serviceType && (
					<p className="text-red-500 text-sm">
						{errors.tripInfo.serviceType.message}
					</p>
				)}
			</div>

			<div className="space-y-2">
				<Label htmlFor="pickup">Pickup Location</Label>
				<Input
					id="pickup"
					{...register("tripInfo.pickup")}
					placeholder="Enter pickup address"
				/>
				{errors.tripInfo?.pickup && (
					<p className="text-red-500 text-sm">
						{errors.tripInfo.pickup.message}
					</p>
				)}
			</div>

			<div className="space-y-2">
				<Label htmlFor="dropoff">Drop-off Location</Label>
				<Input
					id="dropoff"
					{...register("tripInfo.dropoff")}
					placeholder="Enter drop-off address"
				/>
				{errors.tripInfo?.dropoff && (
					<p className="text-red-500 text-sm">
						{errors.tripInfo.dropoff.message}
					</p>
				)}
			</div>
		</div>
	);
}
