import {isMobile} from "react-device-detect";
import Particles from "react-particles-js";
import React from "react";

export default function ParticlesCanvas(props: {height: string}){

    return <Particles
        style={{
            position: "absolute"
        }
        }
        height={props.height}
        width={"99vw"}
        params={
            {
                particles: {
                    number: {
                        value: isMobile ? 30 : 100,
                    },
                    size: {
                        value: 2
                    },
                    move: {
                        speed: {
                            min: 0,
                            max: 4
                        },
                        noise: {
                            clamp: true,
                            enable: true,
                            delay: {
                                value: 1000
                            }
                        },
                    }
                },

                motion: {
                    reduce: {
                        value: true,
                        factor: 20
                    }
                },

                interactivity: {
                    events: {
                        resize: true,
                        onHover: {
                            enable: true,
                            mode: "attract"
                        }
                    }
                }
            }
        }
    />;
}