module.exports = {
	jest: {
		configure: {
			coverageDirectory: 'src/coverage',
			reporters: [
				'default',
				[
					'jest-html-reporters',
					{
						filename: 'test-report.html',
					},
				],
			],
		},
	},
};
