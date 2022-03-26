import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useWebsites} from "../../hooks/useWebsites";

const Main = () => {

    const navigate = useNavigate();

    const {error, loading, data} = useWebsites();

    const token = localStorage.getItem("access_token")

    console.log(data)

    useEffect(() => {
        if (token === null) {
            navigate("/login")
        }
    }, [])

    if (loading) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <div className="flex bg-black flex-col min-h-[100vh] items-center justify-center">
                    <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-white">
                    User data : {
                    data.viewer.email
                }
                    </h1>

                <h2 className="font-medium leading-tight text-3xl mt-0 mb-2 text-white">
                    Available websites you can click it:<br/></h2>{
                data.viewer.sites.map((site)=>(
                    <a href={`https://${site.host}`} className="text-[#c6c6c6] hover:text-xl" target="_blank">{site.host}<br/></a>
                ))
            }
        </div>
    )
};

export default Main;