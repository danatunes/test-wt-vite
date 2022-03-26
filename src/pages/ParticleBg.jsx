import React from 'react';
import Particles from "react-tsparticles";
import ParticlesConfig  from "../config/particle-config"
import styled from 'styled-components'

const Box = styled.div`
position: absolute;
top:0;
right:0;
left:0;
bottom:0;
z-index:0;
`

const ParticleBg = () => {
    return (
        <Box>
            <Particles style={{position:'absolute',top:0}} params={ParticlesConfig}/>
        </Box>
    );
};

export default ParticleBg;