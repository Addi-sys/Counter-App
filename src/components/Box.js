import React from 'react'
import SmallBox from './SmallBox'
import {useSelector} from 'react-redux'

export default function Box() {

    const count = useSelector((state) => state.count)

    return (
        <div>
            <h4>Big Box {count}</h4>
            <SmallBox />
        </div>
    )
}
