import { Button, Input } from "@chakra-ui/react";
import { PasswordInput, PasswordStrengthMeter } from "@/components/ui/password-input";
import React from "react";

const MAX_PASSWORD_STRENGTH = 5;

export const Login = () => {
	const [username, setUsername] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [passwordStrength, setPasswordStrength] = React.useState(0);

	React.useEffect(() => {
		let newPasswordStrength = 0;

		if (password.length > 10) {
			newPasswordStrength = 5;
		} else if (password.length >= 9) {
			newPasswordStrength = 4;
		} else if (password.length >= 8) {
			newPasswordStrength = 3;
		} else if (password.length >= 7) {
			newPasswordStrength = 2;
		} else if (password.length >= 5) {
			newPasswordStrength = 1;
		}

		setPasswordStrength(newPasswordStrength);
	}, [password]);

	return (
		<div style={{ minWidth: "400px" }}>
			<div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
				<Input value={username} onChange={(e) => setUsername(e.target.value)} />
				<PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />
			</div>
			<PasswordStrengthMeter max={MAX_PASSWORD_STRENGTH} value={passwordStrength} />

			<Button>Login</Button>
		</div>
	);
};
