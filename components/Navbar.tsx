'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import { appSelector } from '@/store/slices/appSlice'
type Props = {}

export default function Navbar({ }: Props) {
    const appReducer = useSelector(appSelector);
    return (
        <div>counter from Navbar component :
            
            {appReducer.counter}
        </div>
    )
}