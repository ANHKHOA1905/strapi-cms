export default ({ env }) => ({
	connection: {
		client: 'mysql',
		connection: {
		host: env('DATABASE_HOST', 'btaskee-cms-data'),
			port: env.int('DATABASE_PORT', 3306),
			database: env('DATABASE_NAME', 'btaskee-cms-data'),
			user: env('DATABASE_USERNAME', 'btaskee-admin'),
			password: env('DATABASE_PASSWORD', 'btaskee-admin'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
