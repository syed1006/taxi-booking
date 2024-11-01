import { useTheme } from "@/context/theme/theme.context";
import { InfiniteMovingCards } from "../globals/infinite-moving-cards";
import BangaloreIcon from "../icons/bangalore-icon";
import DelhiIcon from "../icons/delhi-icon";
import HyderabadIcon from "../icons/hyderabad-icon";
import KolkattaIcon from "../icons/kolkatta-icon";
import MumbaiIcon from "../icons/mumbai-icon";

const items = [
	{ name: "Hyderabad", iconComponent: HyderabadIcon },
	{ name: "Mumbai", iconComponent: MumbaiIcon },
	{ name: "Bangalore", iconComponent: BangaloreIcon },
	{ name: "Delhi", iconComponent: DelhiIcon },
	{ name: "Kolkata", iconComponent: KolkattaIcon },
];

const ScrollingIconsContainer = () => {
	const { theme } = useTheme();
	return (
		<section className=" flex justify-center">
			<InfiniteMovingCards theme={theme} items={items} speed="normal" />
		</section>
	);
};

export default ScrollingIconsContainer;
