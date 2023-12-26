'use client'
import { appSelector } from "@/store/slices/appSlice"
import { useAppDispatch, RootState } from "@/store/store"
import { useSelector } from "react-redux"
import { decrement, increment } from "@/store/slices/appSlice"

const Counter = () => {
    const appReducer = useSelector(appSelector);
    const dispatch = useAppDispatch();

    return (
        <div>
            counter from Counter component : {appReducer.counter}            
            <div>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                ||
                <button onClick={() => dispatch(increment())}>Increment</button>
            </div>
        </div>
    )
}

export default Counter;