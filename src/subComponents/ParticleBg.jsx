import React from 'react';
import Particles from "react-tsparticles";
import ParticlesConfig  from "../config/particle-config"

const ParticleBg = () => {
    return (
        <div className="absolute z-0">
            <Particles style={{position:'absolute',top:0}} params={ParticlesConfig}/>
        </div>
    );
};

export default ParticleBg;