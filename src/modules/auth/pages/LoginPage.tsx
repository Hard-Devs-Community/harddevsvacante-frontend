import { AuthTemplate } from "@modules/auth/components/templates/AuthTemplate/AuthTemplate";
import { LoginForm } from "@modules/auth/components/organisms/LoginForm/LoginForm";

export const LoginPage = () => {
	return (
		<AuthTemplate title='Welcome Back'>
			<LoginForm />
		</AuthTemplate>
	);
};
