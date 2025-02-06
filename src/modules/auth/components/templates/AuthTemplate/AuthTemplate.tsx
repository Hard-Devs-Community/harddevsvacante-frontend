import { ReactNode } from "react";
import "./AuthTemplate.scss";

type AuthTemplateProps = {
	children: ReactNode;
	title: string;
};

export const AuthTemplate = ({ children, title }: AuthTemplateProps) => {
	return (
		<div className='auth-template'>
			<div className='auth-template__content'>
				<h1 className='auth-template__title'>{title}</h1>
				{children}
			</div>
		</div>
	);
};
