import { createAction, props } from "@ngrx/store";
import { Pets } from "../interfaces/schemas";

export const ADD_PETS='Add Pets'

export const addPets=createAction("[Pets Component] Add Pets",props<{pets:Pets}>())