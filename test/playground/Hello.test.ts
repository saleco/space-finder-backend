import { APIGatewayProxyEvent } from 'aws-lambda';
import { handler } from '../../services/SpacesTable/Read';

const event: APIGatewayProxyEvent = {
    queryStringParameters: {
        spaceId: '1662379459972'
    }
} as any;


const result = handler(event as any, {} as any).then((apiResult) => {
    const items = JSON.parse(apiResult.body);
    console.log(123)
});