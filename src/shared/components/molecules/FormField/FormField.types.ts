import { InputHTMLAttributes } from "react";
import { Control, FieldValues, Path } from "react-hook-form";

export interface FormFieldProps<T extends FieldValues>
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "name"> {
	name: Path<T>;
	label?: string;
	control: Control<T>;
	error?: string;
}
