import { type FC, cloneElement, useState } from "react";
import { Status, type ImageProps } from "./image.types";
import { absolute } from "../async-image.styles";
import { Blur } from "@/components/transitions/blur";

export const Image: FC<ImageProps> = ({
	error,
	loader,
	onLoad,
	onError,
	objectFit = "cover",
	Transition = Blur,
	timeout = 1000,
	sources = [],
	inView,
	...imageProps
}) => {
	const [status, setStatus] = useState(Status.LOADING);

	return (
		<>
			<Blur
				appear={false}
				in={status === Status.LOADING}
				timeout={timeout}
				unmountOnExit
			>
				{cloneElement(loader, {
					style: { ...loader.props.style, ...absolute },
				})}
			</Blur>
			{inView && (
				<Transition in={status === Status.LOADED} timeout={timeout}>
					<picture style={absolute}>
						{sources.map((sp) => (
							<source key={sp.srcSet} {...sp} />
						))}

						<img
							{...imageProps}
							className="AsyncImage-image"
							style={{ objectFit, ...absolute }}
							onLoad={(event) => {
								setStatus(Status.LOADED);
								onLoad?.(event);
							}}
							onError={(event) => {
								setStatus(Status.FAILED);
								onError?.(event);
							}}
						/>
					</picture>
				</Transition>
			)}
			<Transition
				in={status === Status.FAILED}
				timeout={timeout}
				mountOnEnter
				unmountOnExit
			>
				{cloneElement(error, {
					style: { ...error.props.style, ...absolute },
				})}
			</Transition>
		</>
	);
};
