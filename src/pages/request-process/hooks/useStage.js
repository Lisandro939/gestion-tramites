import React, { useState } from "react"

export const useStage = () => {

    const [activeStage, setActiveStage] = useState(1);

    const prevStage = () => {
        if (activeStage !== 1) {
            setActiveStage(activeStage - 1);
        }
    }

    const nextStage = () => {
        if (activeStage !== 5) {
            setActiveStage(activeStage + 1);
        }
        console.log(activeStage)
    }

    const stages = [
        {
            id: 1,
            name: 'Validación de identidad'
        },
        {
            id: 2,
            name: 'Confirmación de datos'
        },
        {
            id: 3,
            name: 'Selección de categoría'
        },
        {
            id: 4,
            name: 'Selección de tipo de trámite'
        },
        {
            id: 5,
            name: 'Confirmación de trámite'
        }
    ]

    return {
        activeStage,
        setActiveStage,
        stages,
        nextStage,
        prevStage
    }
}