import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const ContainerScroll = ({
	bodyComponent,
}: {
	bodyComponent: string | React.ReactNode;
}) => {
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	});

	const [isMobile, setIsMobile] = React.useState(false);

	React.useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 768);
		};
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => {
			window.removeEventListener("resize", checkMobile);
		};
	}, []);

	const scaleDimensions = () => (isMobile ? [0.7, 0.9] : [1.05, 1]);

	const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, -20]);
	const scale = useTransform(
		scrollYProgress,
		[0, 0.5, 1],
		[1, 1, scaleDimensions()[1]]
	);
	const translate = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, -200]);

	return (
		<div
			className="h-[80rem] flex items-center justify-center relative p-4 md:p-20"
			ref={containerRef}
		>
			<div
				className="py-20 w-full relative"
				style={{
					perspective: "1000px",
				}}
			>
				<Header translate={translate} />
				<Card
					rotate={rotate}
					translate={translate}
					scale={scale}
					bodyComponent={bodyComponent}
				/>
			</div>
		</div>
	);
};

export const Header = ({ translate }: any) => {
	return (
		<motion.div
			style={{
				translateY: translate,
			}}
			className="max-w-5xl mx-auto text-center text-4xl font-semibold mb-9 md:mb-12 px-4 md:px-0"
		>
			<div className="p-2 md:p-0">Book Cab</div>
		</motion.div>
	);
};

export const Card = ({
	rotate,
	scale,
	translate,
	bodyComponent,
}: {
	rotate: any;
	scale: any;
	translate: any;
	bodyComponent: any;
}) => {
	return (
		<motion.div
			style={{
				rotateX: rotate,
				scale,
				translateY: translate,
				boxShadow:
					"0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
			}}
			className="max-w-5xl -mt-12 mx-auto w-full h-full md:h-[40rem] p-6 bg-[#222222] rounded-[30px] shadow-2xl"
		>
			<div className="bg-gray-100 h-full w-full rounded-2xl p-4 md:p-8">
				<div className="w-full h-full flex justify-center items-center">
					{bodyComponent}
				</div>
			</div>
		</motion.div>
	);
};
