import type {
	CSSProperties,
	ReactElement,
	ImgHTMLAttributes,
	ComponentType,
	SourceHTMLAttributes,
} from "react";
import { TransitionProps } from "../transitions/utils";

type PX = `${number}px`;
type RootMargin =
	| `${PX} ${PX} ${PX} ${PX}`
	| `${PX} ${PX} ${PX}`
	| `${PX} ${PX}`
	| `${PX}`;
type ImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "height" | "width">;

type CompleteImageProps = ImgHTMLAttributes<HTMLImageElement>;

export type SourceProps = Omit<
	SourceHTMLAttributes<HTMLSourceElement>,
	"src"
> & { srcSet: string };

export interface AsyncImageProps extends ImageProps {
	src: string;
	sources?: SourceProps[];
	rootMargin?: RootMargin;
	error?: ReactElement;
	loader?: ReactElement;
	timeout?: TransitionProps["timeout"];
	objectFit?: CSSProperties["objectFit"];
	Transition?: ComponentType<TransitionProps>;
}

export interface CompleteAsyncImageProps extends CompleteImageProps {
	src: string;
	sources?: SourceProps[];
	rootMargin?: RootMargin;
	error?: ReactElement;
	loader?: ReactElement;
	timeout?: TransitionProps["timeout"];
	objectFit?: CSSProperties["objectFit"];
	Transition?: ComponentType<TransitionProps>;
}
