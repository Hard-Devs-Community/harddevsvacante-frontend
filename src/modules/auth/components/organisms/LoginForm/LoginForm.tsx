import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuthContext } from "../../../context/AuthContext";
import type { LoginCredentials } from "../../../types/auth.types";
import { FormField } from "@/shared/components/molecules/FormField/FormField";
import { Button } from "@/shared/components/atoms/Button/Button";

const loginSchema = yup
	.object({
		email: yup.string().email("Invalid email").required("Email is required"),
		password: yup.string().required("Password is required"),
	})
	.required();

export const LoginForm = () => {
	const { login, isLoading } = useAuthContext();

	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<Partial<LoginCredentials>>({
		resolver: yupResolver(loginSchema),
		defaultValues: { email: "", password: "" },
	});

	return (
		<form onSubmit={handleSubmit(login)} className='login-form'>
			<FormField
				control={control}
				name='email'
				type='email'
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
				Log In
			</Button>
		</form>
	);
};
