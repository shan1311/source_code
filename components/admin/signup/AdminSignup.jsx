import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import logoImage from './whatsapp-image-20240123-at-1705-1@2x.png'; 

const AdminSignup = () => {
	const [data, setData] = useState({
		name: "",
		email: "",
		password: "",
		confirmpassword:""
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:5000/api/admin";
			const { data: res } = await axios.post(url, data);
			navigate("/adminlogin");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className={styles.signup_container}>
			<div className={styles.parentFrame}/>
			<div className={styles.signup_form_container}>
			<img src={logoImage} alt="Logo" className={styles.logo} />
				<div className={styles.left}>
					<h1>Already Signup !</h1>
					<Link to="/adminlogin">
						<button type="button" className={styles.white_btn}>
							Log in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="Admin ID"
							name="id"
							onChange={handleChange}
							value={data.id}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Admin Name"
							name="name"
							onChange={handleChange}
							value={data.name}
							required
							className={styles.input}
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Confirm Password"
							name="confirmpassword"
							onChange={handleChange}
							value={data.confirmpassword}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AdminSignup;