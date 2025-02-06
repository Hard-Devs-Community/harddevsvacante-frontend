import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@atoms/Button/Button";
import { FormField } from "@molecules/FormField/FormField";
import { useAuthContext } from "../../../context/AuthContext";
import type { RegisterData } from "../../../types/auth.types";
import "./RegisterForm.scss";

const registerSchema = yup
	.object({
		name: yup.string().required("Name is required"),
		email: yup.string().email("Invalid email").required("Email is required"),
		password: yup
			.string()
			.min(8, "Password must be at least 8 characters")
			.required("Password is required"),
	})
	.required();

export const RegisterForm = () => {
	const { register: registerUser, isLoading } = useAuthContext();

	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<Partial<RegisterData>>({
		resolver: yupResolver(registerSchema),
	});

	return (
		<form onSubmit={handleSubmit(registerUser)} className='register-form'>
			<FormField
				control={control}
				name='name'
				label='Name'
				error={errors.name?.message}
			/>
			<FormField
				control={control}
				name='email'
				label='Email'
				error={errors.email?.message}
			/>
			<FormField
				control={control}
				name='password'
				type='password'
				label='Password'
				error={errors.password?.message}
			/>
			<Button type='submit' fullWidth isLoading={isLoading}>
				Register
			</Button>
		</form>
	);
};
