import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {gql, useMutation} from "@apollo/client";
import clsx from "clsx";
import ParticleBg from "../../subComponents/ParticleBg";


const LOGIN = gql`
    mutation login($email:String!,$password: String!){
        users{
            login(input:{
                email:$email,
                password:$password
            }){
                token{
                    accessToken
                    refreshToken
                }
            }
        }
    }

`

const Login = () => {

    const navigate = useNavigate();

    const [login, {data, loading, error}] = useMutation(LOGIN);

    if (!error && data?.users.login.token) {
        localStorage.setItem('access_token', data.users.login.token.accessToken);
        navigate("/main");
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const requestData = Object.fromEntries(formData);
        console.log(requestData)
        login({variables: {email:requestData.email,password:requestData.password}});
    }

    return (
        <div className="w-full h-full absolute bg-black flex justify-center">
        <ParticleBg/>
        <div className="flex relative z-10 flex-col leading-tight justify-center items-center min-w-[400px]">
            <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-[#F4F4F4]">Login form</h1>
            <form onSubmit={handleSubmit} className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-[#c6c6c6] text-xs font-bold mb-2"
                               htmlFor="email">
                            Email
                        </label>
                        <input
                            name="email"
                            type="email"
                            required
                            className={clsx("z-50 appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",{error : "border-red-500"})}
                            id="email" placeholder="Jane"/>
                        {
                            error ?
                                <p className="text-red-500 text-xs italic">Братан ты всё правильно ввел ? Уверен ? user@example.com</p>
                                :
                                <p className="text-gray-600 text-xs italic">Please fill out this field.</p>
                        }
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label
                            className="block uppercase text-[#c6c6c6] tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="password">
                            Password
                        </label>
                        <input
                            name="password"
                            className={clsx("appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",{error : "border-red-500"})}
                            id="password" type="password" placeholder="******************"/>
                        {
                            error ?
                                <p className="text-red-500 text-xs italic">Ну чел ты вообще, нну чел как бы ... user123#</p>
                                :
                                <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                        }
                    </div>
                </div>
                <button
                    type="submit"
                    className="hover:bg-white w-full hover:text-black text-white font-bold py-2 px-4 border-b-4 border-[#c6c6c6] hover:border-[#c6c6c6] rounded">
                    Button
                </button>
            </form>
        </div>
        </div>
    );
};

export default Login;