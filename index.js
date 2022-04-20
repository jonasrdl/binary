module.exports = class Binary {
	/**
	 * @description Convert binary to decimal
	 * @param binaryNumber {string}
	 * @returns decimalNumber
	 */
	static toDecimal(binaryNumber) {
		let decimalNumber = 0;
		let binaryNumberLength = binaryNumber.length;

		if (typeof binaryNumber !== 'string') {
			return 'Invalid type, expected string';
		}

		for (let i = 0; i < binaryNumberLength; i++) {
			decimalNumber +=
				binaryNumber[i] * Math.pow(2, binaryNumberLength - i - 1);
		}

		return decimalNumber;
	}

	/**
	 * @description Convert decimal to binary
	 * @param decimalNumber {number}
	 * @returns binaryNumber
	 */
	static toBinary(decimalNumber) {
		let binaryNumber = '';

		while (decimalNumber > 0) {
			binaryNumber = (decimalNumber % 2) + binaryNumber;
			decimalNumber = Math.floor(decimalNumber / 2);
		}

		return binaryNumber;
	}
};
