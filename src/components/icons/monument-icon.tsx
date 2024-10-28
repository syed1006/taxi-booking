import React from "react";

const MonumentIcon = ({
	icon,
	name,
}: {
	icon: React.ReactNode;
	name: string;
}) => {
	return (
		<div className="relative flex items-center justify-center h-60 w-60 overflow-hidden">
			<span className="absolute bottom-0 mb-2 text-4xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-gray-800 to-transparent drop-shadow-[3px_3px_4px_rgba(0,0,0,0.3)]">
				{name}
			</span>
			<div className="text-gray-300 text-[6rem] md:text-[8rem] lg:text-[10rem] opacity-90">
				{icon}
			</div>
		</div>
	);
};

export default MonumentIcon;
