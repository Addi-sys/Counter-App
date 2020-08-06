import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Box({ id }) {

    const dispatch = useDispatch

    const backColor = useSelector((state) => state.backgroundColor)
    const singleColor = useSelector((state) => state.boxArray[id])


    return (
        <div className="box" style={{ backgroundColor: singleColor ? singleColor : backColor }}>
            <input
                type="text"
                onChange={(e) =>
                    dispatch({
                        type: 'SINGLECOLOR',
                        payload: { id: id, color: e.target.value }
                    })
                }
            />

        </div>
    )
}
