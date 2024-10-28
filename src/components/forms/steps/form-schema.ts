import * as z from "zod";

export const tripInfoSchema = z.object({
	serviceType: z.enum([
		"airport",
		"outstation",
		"disposal",
		"city",
		"corporate",
		"oneway",
	]),
	pickup: z.string().min(1, "Pickup location is required"),
	dropoff: z.string().min(1, "Drop-off location is required"),
});

export const dateTimeSchema = z.object({
	pickupDate: z.date().min(new Date(), "Pickup date must be in the future"),
	pickupTime: z
		.string()
		.regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format"),
	returnDate: z.date().optional(),
	returnTime: z
		.string()
		.regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format")
		.optional(),
});

export const vehicleSchema = z.object({
	vehicleType: z.enum(["sedan", "suv", "tempo", "luxury"]),
	vehicleModel: z.string().min(1, "Vehicle model is required"),
});

export const passengerInfoSchema = z.object({
	passengers: z.number().min(1).max(25),
	specialRequests: z.string().optional(),
});

export const contactDetailsSchema = z.object({
	fullName: z.string().min(2, "Full name is required"),
	mobileNumber: z
		.string()
		.regex(/^[6-9]\d{9}$/, "Invalid Indian mobile number"),
});

export const paymentSchema = z.object({
	paymentMethod: z.enum(["cash", "onArrival"]),
});

export const bookingSchema = z.object({
	tripInfo: tripInfoSchema,
	dateTime: dateTimeSchema,
	vehicle: vehicleSchema,
	passengerInfo: passengerInfoSchema,
	contactDetails: contactDetailsSchema,
	payment: paymentSchema,
});

export type BookingFormData = z.infer<typeof bookingSchema>;

// Define types for each vehicle type and their respective models
export type VehicleType = "sedan" | "suv" | "tempo" | "luxury";

export type SedanModel =
	| "Toyota Etios"
	| "Nissan Sunny"
	| "Swift Dzire"
	| "Suzuki Ciaz"
	| "Honda Amaze"
	| "Mahindra Verito";

export type SuvModel =
	| "Suzuki Ertiga"
	| "Toyota Innova"
	| "Kia Carens"
	| "Toyota Innova Crysta"
	| "Toyota High Cross";

export type TempoModel =
	| "12+1 Tempo Traveller"
	| "17+1 Tempo Traveller"
	| "25+1 Tempo Traveller";

export type LuxuryModel =
	| "Mercedes E-Class"
	| "Mercedes S-Class"
	| "BMW 5 Series"
	| "BMW 7 Series"
	| "Audi Q7"
	| "Toyota Fortuner"
	| "Toyota High Cross";

// Map each vehicle type to its corresponding models
export type VehicleModels = {
	sedan: SedanModel[];
	suv: SuvModel[];
	tempo: TempoModel[];
	luxury: LuxuryModel[];
};

// Define the options array with specific types for models
export const vehicleOptions: {
	[K in VehicleType]: { type: K; models: VehicleModels[K] };
} = {
	sedan: {
		type: "sedan",
		models: [
			"Toyota Etios",
			"Nissan Sunny",
			"Swift Dzire",
			"Suzuki Ciaz",
			"Honda Amaze",
			"Mahindra Verito",
		],
	},
	suv: {
		type: "suv",
		models: [
			"Suzuki Ertiga",
			"Toyota Innova",
			"Kia Carens",
			"Toyota Innova Crysta",
			"Toyota High Cross",
		],
	},
	tempo: {
		type: "tempo",
		models: [
			"12+1 Tempo Traveller",
			"17+1 Tempo Traveller",
			"25+1 Tempo Traveller",
		],
	},
	luxury: {
		type: "luxury",
		models: [
			"Mercedes E-Class",
			"Mercedes S-Class",
			"BMW 5 Series",
			"BMW 7 Series",
			"Audi Q7",
			"Toyota Fortuner",
			"Toyota High Cross",
		],
	},
};

export type ServiceType =
	| "airport"
	| "outstation"
	| "disposal"
	| "city"
	| "corporate"
	| "oneway";

export const serviceOptions: { value: ServiceType; label: string }[] = [
	{ value: "airport", label: "Airport pickup and drop" },
	{ value: "outstation", label: "Outstation bookings" },
	{ value: "disposal", label: "Disposal packages" },
	{ value: "city", label: "City local packages" },
	{ value: "corporate", label: "Corporate bookings" },
	{ value: "oneway", label: "One-way drop" },
];
