import { forwardRef } from "react";
import "./Input.scss";

type InputProps = {
	error?: string;
	label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ error, label, ...props }, ref) => {
		return (
			<div className='input-wrapper'>
				{label && <label className='input-label'>{label}</label>}
				<input
					ref={ref}
					className={`input ${error ? "input--error" : ""}`}
					{...props}
				/>
				{error && <span className='input-error'>{error}</span>}
			</div>
		);
	},
);
