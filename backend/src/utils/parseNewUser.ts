/* eslint-disable @typescript-eslint/no-explicit-any */
// disabled since file is for parsing outside entries

import { NewUserEntry } from "../types";

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};

const parseStringInput = (text: any): string => {
    if(!text || !isString(text)) {
        throw new Error(`incorrect or missing input: ${text}`);
    }
    return text;
};

const parseNewUserEntry = (object: any): NewUserEntry => {
    const newUser: NewUserEntry = {
        username: parseStringInput(object.username),
        password: parseStringInput(object.password),
        name: parseStringInput(object.name),
        email: parseStringInput(object.email)
    };
    return newUser;
};

export default parseNewUserEntry;