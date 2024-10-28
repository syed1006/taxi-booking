import { useFormContext } from "react-hook-form";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { BookingFormData } from "./form-schema";

export default function DateTime() {
	const {
		register,
		formState: { errors },
		setValue,
		watch,
	} = useFormContext<BookingFormData>();

	return (
		<div className="space-y-4">
			<div className="space-y-2">
				<Label>Pickup Date</Label>
				<Popover>
					<PopoverTrigger asChild>
						<Button
							variant="outline"
							className="w-full justify-start text-left font-normal"
						>
							<CalendarIcon className="mr-2 h-4 w-4" />
							{watch("dateTime.pickupDate") ? (
								format(watch("dateTime.pickupDate"), "PPP")
							) : (
								<span>Pick a date</span>
							)}
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-auto p-0">
						<Calendar
							mode="single"
							selected={watch("dateTime.pickupDate")}
							onSelect={(date) =>
								setValue("dateTime.pickupDate", date as Date)
							}
							initialFocus
						/>
					</PopoverContent>
				</Popover>
				{errors.dateTime?.pickupDate && (
					<p className="text-red-500 text-sm">
						{errors.dateTime.pickupDate.message}
					</p>
				)}
			</div>
			<div className="space-y-2">
				<Label htmlFor="pickupTime">Pickup Time</Label>
				<Input
					id="pickupTime"
					type="time"
					{...register("dateTime.pickupTime")}
				/>
				{errors.dateTime?.pickupTime && (
					<p className="text-red-500 text-sm">
						{errors.dateTime.pickupTime.message}
					</p>
				)}
			</div>
			{watch("tripInfo.serviceType") === "outstation" && (
				<>
					<div className="space-y-2">
						<Label>Return Date</Label>
						<Popover>
							<PopoverTrigger asChild>
								<Button
									variant="outline"
									className="w-full justify-start text-left font-normal"
								>
									<CalendarIcon className="mr-2 h-4 w-4" />
									{watch("dateTime.returnDate") ? (
										format(
											watch(
												"dateTime.returnDate"
											) as Date,
											"PPP"
										)
									) : (
										<span>Pick a date</span>
									)}
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-auto p-0">
								<Calendar
									mode="single"
									selected={watch("dateTime.returnDate")}
									onSelect={(date) =>
										setValue("dateTime.returnDate", date)
									}
									initialFocus
								/>
							</PopoverContent>
						</Popover>
						{errors.dateTime?.returnDate && (
							<p className="text-red-500 text-sm">
								{errors.dateTime.returnDate.message}
							</p>
						)}
					</div>
					<div className="space-y-2">
						<Label htmlFor="returnTime">Return Time</Label>
						<Input
							id="returnTime"
							type="time"
							{...register("dateTime.returnTime")}
						/>
						{errors.dateTime?.returnTime && (
							<p className="text-red-500 text-sm">
								{errors.dateTime.returnTime.message}
							</p>
						)}
					</div>
				</>
			)}
		</div>
	);
}
