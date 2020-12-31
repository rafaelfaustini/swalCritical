Swal.fireCritical = function (args) {
	if (args.action && args.target) {
		const defaults = {
			action: "delete",
			target: "something",
			text: `Type '${args.action} ${args.target}' to confirm`,
			title: "Are you sure?",
			errorText: "You need to confirm the action correctly",
		};
		let params = {
			...defaults,
			...args,
		};
		const action = params.action;
		delete params.action;
		const target = params.target;
		delete params.target;
		const errorText = params.errorText;
		delete params.errorText;

		return Swal.fire({
			inputValidator: (value) => {
				if (value !== `${action} ${target}`) {
					return errorText;
				}
			},
			input: "text",
			showCancelButton: true,
			...params,
		});
	}
};
