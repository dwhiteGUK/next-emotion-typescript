const STAGE = process.env.NODE_ENV

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const dev = {
	STAGE: 'dev',
	host: 'https://gnt-uk-prd-strapi-ecs-alb-628847037.eu-west-2.elb.amazonaws.com',
	port: '',
	jackpotsApi: 'https://edukuqqyjg.execute-api.eu-west-2.amazonaws.com',
}

const prod = {
	STAGE: 'production',
	host: 'https://gnt-uk-prd-strapi-ecs-alb-628847037.eu-west-2.elb.amazonaws.com',
	port: '',
	jackpotsApi: 'https://edukuqqyjg.execute-api.eu-west-2.amazonaws.com',
}

let config: {
	STAGE: string
	host: string
	port: string
	jackpotsApi: string
} = dev

switch (STAGE) {
	case 'production':
		config = prod
		break
	default:
		config = dev
		break
}

export default {
	// Pull in config based on staging environment
	...config,
}
