import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button} from '@mui/material';
import '../../css/pages/register.scss';
import RegisterForm from "./RegisterForm.jsx";

const Register = () => {
    const [scrollY, setScrollY] = useState(0);
    const [up, setUp] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        const preventScroll = (e) => {
            if (!up) {
                e.preventDefault();
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('wheel', preventScroll, { passive: false });
        window.addEventListener('touchmove', preventScroll, { passive: false });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('wheel', preventScroll);
            window.removeEventListener('touchmove', preventScroll);
        };
    }, [up]);

    const smoothScroll = (target, duration) => {
        const targetPosition = target - window.pageYOffset;
        const startTime = performance.now();

        const animateScroll = (currentTime) => {
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, window.pageYOffset, targetPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animateScroll);
        };

        const ease = (t, b, c, d) => {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
        };

        requestAnimationFrame(animateScroll);
    };

    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        smoothScroll(window.pageYOffset + windowHeight, 15000); // 1000ms = 1s
        
        setTimeout(()=>{
            setUp(true)
        },4000)
    };



    return (
        <>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1.5}}
                style={{position: 'relative', width: '100%', height: "100vh", overflow: 'hidden'}}
            >
                {!up && <>
                    <section className={`parallax-wrapper`}
                    >
                        <img
                            className="stars"
                            src="/images/lightbgstars.png"
                            alt=""
                            style={{
                                top: scrollY * 0.25 + 'px',
                                left: scrollY * 0.3 + 'px',
                            }}
                        />
                        <img
                            className="moon"
                            src="/images/moon.png"
                            alt=""
                            style={{
                                top: scrollY >= 500 ? '-500px' : scrollY + 'px',
                            }}

                        />
                        <img
                            className="back"
                            src="/images/back.png"
                            alt=""
                            style={{top: scrollY * 0.4 + 'px'}}
                        />
                        <h2
                            className="text"
                            style={{
                                top: window.innerWidth > 768 ? 250 + scrollY * 0.3 + 'px' : '',
                                left: window.innerWidth > 768 ? 140 + scrollY + 'px' : '',
                            }}
                        >
                            Welcome!
                        </h2>

                        <img
                            className="mountains"
                            src="/images/Montains.png"
                            alt=""
                            style={{top: scrollY * 0.3 + 'px'}}
                        />
                    </section>

                    <Button
                        className={`register-button`}
                        onClick={handleScroll}
                        size={'large'}
                        color={'inherit'}
                        variant={'contained'}
                        sx={{px: 3, borderRadius: 4}}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                        }}
                    >
                        Register
                    </Button>
                </>
                }
                {
                    up && <RegisterForm />
                }
            </motion.div>
                { !up && <div style={{height: "100vh"}}></div>}



        </>
    );
};

export default Register;
