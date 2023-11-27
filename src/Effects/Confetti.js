import Particles from "react-particles";
import { useCallback } from "react";
import { loadFull } from "tsparticles";

const Confetti = () => {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: {
                    zIndex: 1
                },
                emitters: [
                    {
                        position: {
                            x: 100,
                            y: 30
                        },
                        rate: {
                            quantity: 50,
                            delay: 0.15
                        },
                        particles: {
                            move: {
                                direction: "top-left",
                                outModes: {
                                    top: "none",
                                    right: "none",
                                    default: "destroy"
                                }
                            }
                        }
                    }
                ],
                particles: {
                    color: {
                        value: [
                            "#2bff00",
                            "#ffffff",
                            "#ff8000"
                        ]
                    },
                    move: {
                        decay: 0.05,
                        direction: "top",
                        enable: true,
                        gravity: {
                            "enable": true
                        },
                        outModes: {
                            top: "none",
                            default: "destroy"
                        },
                        speed: {
                            min: 10,
                            max: 75
                        }
                    },
                    number: {
                        value: 0
                    },
                    opacity: {
                        value: 1
                    },
                    rotate: {
                        value: {
                            min: 0,
                            max: 360
                        },
                        direction: "random",
                        animation: {
                            enable: true,
                            speed: 30
                        }
                    },
                    tilt: {
                        direction: "random",
                        enable: true,
                        value: {
                            min: 0,
                            max: 360
                        },
                        animation: {
                            enable: true,
                            speed: 30
                        }
                    },
                    size: {
                        value: {
                            min: 0,
                            max: 7
                        },
                        animation: {
                            enable: true,
                            startValue: "min",
                            count: 1,
                            speed: 16,
                            sync: true
                        }
                    },
                    roll: {
                        darken: {
                            enable: true,
                            value: 10
                        },
                        enable: true,
                        speed: {
                            min: 5,
                            max: 15
                        }
                    },
                    wobble: {
                        distance: 30,
                        enable: true,
                        speed: {
                            min: -7,
                            max: 7
                        }
                    },
                    shape: {
                        type: [
                            "square",
                            "triangle",
                            "polygon",
                            "circle"
                        ],
                        options: {
                            polygon: [
                                {
                                    sides: 5
                                },
                                {
                                    sides: 6
                                }
                            ]
                        }
                    }
                }
            }}
        />
    );
}

export default Confetti;
