import {gql, useQuery} from "@apollo/client";

const GET_WEBSITES = gql`
    query{
        viewer{
            id
            email
            sites{
                id
                host
            }
        }
    }
`

export const useWebsites = () => {

    const {loading, error, data} = useQuery(GET_WEBSITES);

    return {
        loading,
        error,
        data
    };
}