import {Navigate, Route, Routes} from "react-router-dom";
import {Login, Main} from "./pages";
import ParticleBg from "./subComponents/ParticleBg";

function App() {
    const token = localStorage.getItem("access_token")
    console.log(token)

    return (
        <div>
        <Routes>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/main' element={<Main/>}/>
            <Route exact path='/main' element={token===null ? <Navigate to='/login'/> : <Navigate to='/main'/>}/>
            <Route path="*" element={token===null ? <Navigate to='/login'/> : <Navigate to='/main'/>} />
        </Routes>
        </div>
    );
}

export default App
