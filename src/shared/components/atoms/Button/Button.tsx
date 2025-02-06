import { forwardRef } from "react";
import { ButtonProps } from "./Button.types";
import "./Button.scss";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			children,
			variant = "primary",
			size = "md",
			fullWidth = false,
			isLoading = false,
			leftIcon,
			rightIcon,
			className = "",
			disabled,
			type = "button",
			...props
		},
		ref,
	) => {
		const buttonClasses = [
			"button",
			`button--${variant}`,
			`button--${size}`,
			fullWidth ? "button--full-width" : "",
			isLoading ? "button--loading" : "",
			className,
		]
			.filter(Boolean)
			.join(" ");

		return (
			<button
				ref={ref}
				className={buttonClasses}
				disabled={disabled || isLoading}
				type={type}
				{...props}>
				{isLoading && (
					<span className='button__spinner'>
						<span className='button__spinner-inner' />
					</span>
				)}
				<span className='button__content'>
					{leftIcon && (
						<span className='button__icon button__icon--left'>{leftIcon}</span>
					)}
					{children}
					{rightIcon && (
						<span className='button__icon button__icon--right'>
							{rightIcon}
						</span>
					)}
				</span>
			</button>
		);
	},
);

Button.displayName = "Button";
