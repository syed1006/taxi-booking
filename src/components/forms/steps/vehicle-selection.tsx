import { useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { BookingFormData, vehicleOptions, VehicleType } from "./form-schema";

export default function VehicleSelection() {
	const {
		formState: { errors },
		setValue,
		watch,
	} = useFormContext<BookingFormData>();

	const selectedVehicleType = watch("vehicle.vehicleType");

	// Find the models associated with the selected vehicle type
	const selectedVehicleModels = selectedVehicleType
		? vehicleOptions[selectedVehicleType].models
		: [];

	return (
		<div className="space-y-4">
			<div className="space-y-2">
				<Label>Vehicle Type</Label>
				<RadioGroup
					onValueChange={(value) =>
						setValue("vehicle.vehicleType", value as VehicleType)
					}
				>
					{Object.values(vehicleOptions).map((option) => (
						<div
							key={option.type}
							className="flex items-center space-x-2"
						>
							<RadioGroupItem
								value={option.type}
								id={option.type}
							/>
							<Label htmlFor={option.type}>
								{option.type.charAt(0).toUpperCase() +
									option.type.slice(1)}
							</Label>
						</div>
					))}
				</RadioGroup>
				{errors.vehicle?.vehicleType && (
					<p className="text-red-500 text-sm">
						{errors.vehicle.vehicleType.message}
					</p>
				)}
			</div>

			<div className="space-y-2">
				<Label htmlFor="vehicleModel">Vehicle Model</Label>
				<Select
					onValueChange={(value) =>
						setValue("vehicle.vehicleModel", value)
					}
				>
					<SelectTrigger>
						<SelectValue placeholder="Select vehicle model" />
					</SelectTrigger>
					<SelectContent>
						{selectedVehicleModels?.map((model) => (
							<SelectItem key={model} value={model}>
								{model}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				{errors.vehicle?.vehicleModel && (
					<p className="text-red-500 text-sm">
						{errors.vehicle.vehicleModel.message}
					</p>
				)}
			</div>
		</div>
	);
}
