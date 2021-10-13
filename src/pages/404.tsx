import {NextPage} from "next";

export const Error404 : NextPage = ({ statusCode }: any) => {
    return (
        <p>
            {statusCode
                ? `An error ${statusCode} occurred on server`
                : 'An error occurred on client 404'}
        </p>
    )
}


export default Error404