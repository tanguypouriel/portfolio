"use client"

import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "./../../../public/animation.json";
import { MutableRefObject, useRef } from "react";

interface AnimationProps {
    className?: string;
}

export default function Animation({ className }: AnimationProps) {
    const lottieRef = useRef<LottieRefCurrentProps>(null);
    let goForward = true;

    return <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={false}
        className={`flex-2 ${className}`}
        onComplete={() => {
            goForward = !goForward;
            lottieRef.current?.setDirection(goForward ? 1 : -1 );
            lottieRef.current?.play();
        }}
    />
}