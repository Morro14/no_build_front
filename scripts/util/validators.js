export default class Validator {
	validateEmail(email) {
		const atCheck = /^[^@]+@[^@]+$/;
		const edgeDotCheck = /^[^\.](.*[^\.])?$/;
		const doubleDotCheck = /^(\.(?!\.)|[^\.])*$/;
		const domainDotCheck = /.+\..+/;

		function emailCheckAt(email) {
			const regex = atCheck;
			return regex.test(email);
		}

		function emailEdgeDotsCheck(emailPart) {
			const regex = edgeDotCheck;
			return regex.test(emailPart);
		}

		function emailDoubleDotCheck(emailPart) {
			const regex = doubleDotCheck;
			return regex.test(emailPart);
		}

		function emailDomainDotCheck(domain) {
			const regex = domainDotCheck;
			return regex.test(domain);
		}
		if (emailCheckAt(email)) {
			const [local, domain] = email.split("@");
			const is_valid =
				emailDoubleDotCheck(local) &&
				emailDoubleDotCheck(domain) &&
				emailEdgeDotsCheck(local) &&
				emailEdgeDotsCheck(domain) &&
				emailDomainDotCheck(domain);

			console.log("Email " + email + " | --> valid: " + String(is_valid));
			return is_valid;
		} else {
			console.log("Email " + email + " | --> valid: " + " false");
			return false;
		}
	}
}	
