import aws from './AWS';

export default {
    Auth: {
        mandatorySignIn: true,
        region: aws.cognito.REGION,
        userPoolId: aws.cognito.USER_POOL_ID,
        identityPoolId: aws.cognito.IDENTITY_POOL_ID,
        userPoolWebClientId: aws.cognito.APP_CLIENT_ID
    },
    Storage: {
        region: aws.s3.REGION,
        bucket: aws.s3.BUCKET,
        identityPoolId: aws.cognito.IDENTITY_POOL_ID
    },
    API: {
        endpoints: [
            {
                name: 'notes',
                endpoint: aws.apiGateway.URL,
                region: aws.apiGateway.REGION
            }
        ]
    }
};
