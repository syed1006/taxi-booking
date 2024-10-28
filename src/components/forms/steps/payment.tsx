import { useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Payment() {
	const {
		formState: { errors },
		setValue,
	} = useFormContext();

	return (
		<div className="space-y-4">
			<RadioGroup
				onValueChange={(value) =>
					setValue("payment.paymentMethod", value)
				}
			>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="cash" id="cash" />
					<Label htmlFor="cash">Cash</Label>
				</div>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="onArrival" id="onArrival" />
					<Label htmlFor="onArrival">Payment on Arrival</Label>
				</div>
			</RadioGroup>
			{errors.payment?.message && (
				<p className="text-red-500 text-sm">
					{errors.payment.message as string}
				</p>
			)}
		</div>
	);
}
