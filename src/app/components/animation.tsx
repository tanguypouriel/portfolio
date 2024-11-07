"use client"

import Lottie from "lottie-react";
import animationData from "./../../../public/animation.json";

interface AnimationProps {
    className?: string;
}

export default function Animation({ className }: AnimationProps) {
    return <Lottie
        animationData={animationData}
        loop={false}
        className={` ${className}`}
    />
}