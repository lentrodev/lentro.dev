import {NextPage} from "next";

export const Error : NextPage = ({ statusCode }: any) => {
    return (
        <p>
            {statusCode
                ? `An error ${statusCode} occurred on server`
                : 'An error occurred on client'}
        </p>
    )
}



// export const getServerSideProps: GetServerSideProps = async (context) => {
//
//     const {res, req} = context;
//
//     const statusCode = res ? res.statusCode : 404;
//     return { props: { statusCode: statusCode }};
// }




export default Error