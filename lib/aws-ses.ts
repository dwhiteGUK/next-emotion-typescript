import { SES, AWSError } from 'aws-sdk'
import { SendEmailRequest, SendEmailResponse } from 'aws-sdk/clients/ses'

const SES_CONFIG = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_ACCESS_SECRET,
  region: process.env.AWS_REGION,
};

export async function sendEmail(options: SendEmailRequest) {
  const ses = new SES(SES_CONFIG)

  ses.sendEmail(options, (err: AWSError, data: SendEmailResponse) => {
    if (err) {
      console.error(err, err.stack)
      throw new Error(err.message)
    }
    
    console.log(data);

    return data.MessageId
  });  
};
