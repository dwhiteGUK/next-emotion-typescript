import * as yup from 'yup'

const getClubValues = (casinos: []) => {
	return casinos?.map((item: { slug: string }) => item.slug) || []
}

export const ContactSchema = (casinos: []) => {
	const contactSchema = yup
		.object({
			firstName: yup.string().required('First name is required').max(80, 'First name is too long'),
			lastName: yup.string().required('Last name is required').max(80, 'Last name is too long'),
			email: yup
				.string()
				.required('Email address is required')
				.max(200, 'Email address is too long')
				.matches(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/, {
					message: 'Email address is not valid',
					excludeEmptyString: true,
				}),
			telephone: yup
				.string()
				.required('Contact number is required')
				.matches(/^(\(?\+?[0-9]*\)?)?[0-9_\- ()]*$/, 'Contact number is not valid'),
			enquiryType: yup
				.string()
				.required('Enquiry type is required')
				.oneOf(['Enquiry-1', 'Enquiry-2', 'Enquiry-3'], 'Enquiry option not found, please try another'),
			casinoName: yup
				.string()
				.required('A casino is required')
				.oneOf(getClubValues(casinos), 'Casino not found, please try another location'),
		})
		.required()

	return contactSchema
}
