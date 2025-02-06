import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@/shared/components/atoms/Button/Button";

const schema = yup
	.object({
		email: yup.string().email().required(),
		password: yup.string().min(6).required(),
	})
	.required();

export const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data: any) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input {...register("email")} />
			{errors.email && <p>{errors.email.message}</p>}

			<input type='password' {...register("password")} />
			{errors.password && <p>{errors.password.message}</p>}

			<Button type='submit'>Login</Button>
		</form>
	);
};
