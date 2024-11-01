import { CSSProperties, ReactNode, Ref, forwardRef } from "react";

interface Props {
	style: CSSProperties;
	className?: string;
	children?: ReactNode;
}

export const Placeholder = forwardRef(
	({ style, ...props }: Props, ref: Ref<HTMLDivElement>) => (
		<div
			ref={ref}
			{...props}
			className={`AsyncImage-root ${props.className}`.trim()}
			style={{
				...style,
				display: "flex",
				overflow: "hidden",
				backgroundRepeat: "no-repeat",
				boxSizing: "border-box",
				backgroundSize: "cover",
				position: style.position || "relative",
			}}
		/>
	)
);

export const absolute: CSSProperties = {
	top: 0,
	left: 0,
	width: "100%",
	height: "100%",
	position: "absolute",
	boxSizing: "border-box",
};

export const FallbackLoader = (
	<div className="AsyncImage-loader" style={{ backgroundColor: "#eee" }} />
);

export const FallbackError = (
	<div className="Asyncimage-error" style={{ backgroundColor: "#eee" }}>
		<svg
			fill="#00000061"
			viewBox="0 0 24 24"
			style={{
				position: "absolute",
				inset: 0,
				width: "50%",
				height: "50%",
				margin: "auto",
			}}
		>
			<path d="M21 5c0-1.1-.9-2-2-2H5.83L21 18.17V5zM2.81 2.81 1.39 4.22 3 5.83V19c0 1.1.9 2 2 2h13.17l1.61 1.61 1.41-1.41L2.81 2.81zM6 17l3-4 2.25 3 .82-1.1 2.1 2.1H6z" />
		</svg>
	</div>
);
