import { useController } from "react-hook-form";
import type { FormFieldProps } from "./FormField.types";
import "./FormField.scss";
import { Input } from "../../atoms/Input/Input";

export const FormField = <T extends Record<string, any>>({
	name,
	label,
	control,
	error,
	type = "text",
	...rest
}: FormFieldProps<T>) => {
	const {
		field,
		fieldState: { error: fieldError },
	} = useController({
		name,
		control,
	});

	const errorMessage = error || fieldError?.message;

	return (
		<div className='form-field'>
			{label && (
				<label htmlFor={name} className='form-field__label'>
					{label}
				</label>
			)}

			<Input
				{...field}
				{...rest}
				id={name}
				type={type}
				error={errorMessage}
				aria-describedby={`${name}-helper-text`}
				className='form-field__input'
			/>
		</div>
	);
};
