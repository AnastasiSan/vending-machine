import { assoc } from "../js/assoc";

export const generateRandomSrting = () => Math.random().toString(36).substring(2,15);

export const assignId = assoc('id', generateRandomSrting());

export const generateId = <O extends object>(obj: O) => assoc('id', generateRandomSrting())(obj)