import React, { useState } from 'react';
import styles from './Login.module.scss';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Login(props) {
	const {
		container,
		form,
		form__header,
		header__text,
		header__logo,
		form__inputs,
		forgot__link,
		submit__btn,
		register__account
	} = styles;

	const { handleLogin, handleUsernameChange, handlePasswordChange } = props;

	return (
		<div className={container}>
			<form className={form} onSubmit={handleLogin}>
				<div className={form__header}>
					<div className={header__text}>SignIn</div>
					<img src={logo} alt="logo" className={header__logo} />
				</div>

				<div className={form__inputs}>
					<label for="username">Username</label>
					<input type="text" name="username" required onChange={handleUsernameChange} />

					<label for="password">Password</label>
					<input type="password" name="password" required onChange={handlePasswordChange} />
					<Link to="#" className={forgot__link}>
						Forgot Your Password
					</Link>

					<button className={submit__btn} type="submit" onclick={handleLogin}>
						Login <span>&gt;</span>
					</button>

					<label for="register-account">Don't have an account?</label>

					<button className={register__account} name="register-account">
						Request For Access <span>&gt;</span>
					</button>
				</div>
			</form>
		</div>
	);
}
