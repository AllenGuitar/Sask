import { createAction, props } from "@ngrx/store";
import { Pets } from "../interfaces/schemas";

export const ADD_PRODUCTS='Add Products'

export const addProducts=createAction("[Pets Component] Add Pets",props<{pets:Pets}>())