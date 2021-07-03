import React, { ReactNode } from "react";

export interface CarModel {
    //Reference in Page
    modelName: string //Name car
    overlayNode: ReactNode //Model car
    sectionRef: React.RefObject<HTMLElement> //Each model is a section
}

interface ModelsContext{
    wrapperRef: React.RefObject<HTMLElement>
    registeredModels: CarModel[]
    registerModel: (model: CarModel) => void
    unregisterModel: (modelName: string) => void
    getModelByName: (modelName: string) => CarModel | null
}

export default React.createContext<ModelsContext>({} as ModelsContext)