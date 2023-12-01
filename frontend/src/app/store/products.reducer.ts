import { createReducer, on } from "@ngrx/store";
import { addPets } from "./products.actions";
import { Pets } from "../interfaces/schemas";

const localStorageProd = localStorage.getItem("shopCart")
const initState: Pets[] = localStorageProd ? JSON.parse(localStorageProd) : []


export const petsReducer = createReducer(
    initState,
    on(addPets, (oldPets, newPets) => {
        const newState = [...oldPets, newPets.pets]
        localStorage.setItem("shopCart", JSON.stringify(newState))
        return newState
    })
)
