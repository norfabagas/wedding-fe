"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function Base({ children }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(!isLoading);
    }, []);

    return isLoading ? <Loader /> : <div>{children}</div>;
}
