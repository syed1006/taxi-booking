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
	const selectedVehicleModel = watch("vehicle.vehicleModel");

	// Find the models associated with the selected vehicle type
	const selectedVehicleModels = selectedVehicleType
		? vehicleOptions.find((veh) => veh.type === selectedVehicleType)?.models
		: [];

	return (
		<div className="space-y-4">
			<div className="space-y-2">
				<Label>Vehicle Type</Label>
				<RadioGroup
					onValueChange={(value) =>
						setValue("vehicle.vehicleType", value as VehicleType)
					}
					className="grid grid-cols-2 gap-4 sm:grid-cols-4"
					value={selectedVehicleType}
				>
					{vehicleOptions.map((vehicle) => (
						<div key={vehicle.type} className="flex">
							<RadioGroupItem
								value={vehicle.type}
								id={vehicle.type}
								className="peer sr-only"
							/>
							<Label
								htmlFor={vehicle.type}
								className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary min-h-[100px] w-full"
								style={{ flexGrow: 1, minHeight: "120px" }}
							>
								<vehicle.icon className="mb-3 h-6 w-6" />
								<div className="text-sm font-semibold">
									{vehicle.label}
								</div>
								<div className="text-xs text-muted-foreground">
									{vehicle.description}
								</div>
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
					value={selectedVehicleModel}
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
