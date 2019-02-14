import React from 'react';
import styles from './Login.module.scss';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Login(props) {
	const { container, form, form__header, header__text, header__logo, form__inputs } = styles;
	return (
		<div className={container}>
			<form className={form}>
				<div className={form__header}>
					<div className={header__text}>SignIn</div>
					<img src={logo} alt="logo" className={header__logo} />
				</div>

				<div className={form__inputs}>
					<label for="username">Username</label>
					<input type="text" name="username" required />

					<label for="password">Password</label>
					<input type="password" name="password" required />
					<Link to="#">Forgot Your Password</Link>

					<button type="submit">
						Login <span>&gt;</span>
					</button>

					<label for="register-account">Don't have an account?</label>
					<button type="submit" name="register-account">
						Request For Access <span>&gt;</span>
					</button>
				</div>
			</form>
		</div>
	);
}
