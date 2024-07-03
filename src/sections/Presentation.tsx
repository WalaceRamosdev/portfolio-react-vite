'use client'

import { useEffect, useState } from 'react'

import style from './css/Presentation.module.css'
import { Button } from '../components/buttons/Button'

export const Presentation = () => {

        const [opacity, setOpacity] = useState(0);
        const message = 'Com uma longa experiência no desenvolvimento de websites e aplicações web, estou aqui para transformar suas ideias em realidade digital. Especializado em tecnologias modernas como HTML5, CSS3, JavaScript, ReactJs, e Node.js, ofereço soluções sob medida que atendem às necessidades específicas do seu negócio.';
    
    useEffect(() => {
        let currentOpacity = 0;
            const intervalId = setInterval(() => {
                currentOpacity += 0.1;
                setOpacity(currentOpacity);
        if (currentOpacity >= 1) {
            clearInterval(intervalId);
        }
    }, 100);

        return () => clearInterval(intervalId);
}, []);

    return (

        <div
        style={{
        opacity: opacity,
        transition: 'opacity 1s',
        fontSize: '24px',
        fontFamily: 'Arial, sans-serif'
    }}
    >
        <main className={style.main}>
            
            <h1>Olá! Sou Walace Ramos</h1>

            <p>
                {message}
            </p>

                <Button text='Meu Instagram' link="https://www.instagram.com/walacedev.contato/"/>

        </main>

        </div>
    )
}