import { useContext } from "react";
import { FamilyContext } from "../context/FamilyContext";
import type { FamilyContextType } from "../types";

export function useFamily(): FamilyContextType{
    const context = useContext(FamilyContext)
    if(!context){
        throw new Error ("UseFamily debe usarse dentro de FamilyProvider")
    }
    return context
}