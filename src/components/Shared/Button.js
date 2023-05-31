"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

export default function Button(props) {
    const [isHovered, setIsHovered] = useState(false);

    const toggleHover = () => {
        setIsHovered(!isHovered);
    }

    return (
        <Link
            href={props.href}
            passHref>
                <button
                    className="transition font-Rubik bg-transparent hover:bg-white border-2 text-white hover:text-black border-bg-white text-center py-4 px-8 text-bold text-2xl rounded mt-8"
                    onMouseEnter={toggleHover}
                    onMouseOut={toggleHover}>
                        <FontAwesomeIcon 
                            icon={isHovered ? props.iconHovered : props.iconDefault} className="mr-2"/>
                        {props.text}
                </button>
            </Link>
    );
}