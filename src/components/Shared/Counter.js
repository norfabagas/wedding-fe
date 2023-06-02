"use client";

import { decrement, increment, reset } from "@/redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Providers } from "@/redux/provider";

export default function Counter() {
    const count = useAppSelector((state) => state.counterReducer.value);
    const dispatch = useAppDispatch();

    return (
        <Providers>
            <h3>{count}</h3>
            <button
                className="transition font-Rubik bg-transparent hover:bg-white border-2 text-white hover:text-black border-bg-white text-center py-4 px-8 text-bold text-2xl rounded mt-8"
                onClick={() => dispatch(increment())}>incr</button>
            <button
                className="transition font-Rubik bg-transparent hover:bg-white border-2 text-white hover:text-black border-bg-white text-center py-4 px-8 text-bold text-2xl rounded mt-8"
                onClick={() => dispatch(decrement())}>decr</button>
            <button
                className="transition font-Rubik bg-transparent hover:bg-white border-2 text-white hover:text-black border-bg-white text-center py-4 px-8 text-bold text-2xl rounded mt-8"
                onClick={() => dispatch(reset())}>reset</button>
        </Providers>
    );
}