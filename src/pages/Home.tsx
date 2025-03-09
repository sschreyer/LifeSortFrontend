import React, { JSX } from "react";

import config from "../../config.json";

interface Plan {
	id: number;
	name?: string;
	isComplete: boolean;
}

export const Home = (): JSX.Element => {
	const [plans, setPlans] = React.useState<Plan[] | undefined>(undefined);

	React.useEffect(() => {
		(async () => {
			try {
				fetch(`https://${config.backendURL}:${config.backendPort}/api/TodoItems`)
					.then((response) => response.json())
					.then((json) => {
						setPlans(json);
					});
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<div>
			This is our home page:
			{plans ? (
				<div>
					{plans.map((plan) => (
						<div>{plan.name}</div>
					))}
				</div>
			) : (
				<div>Loading</div>
			)}
		</div>
	);
};
