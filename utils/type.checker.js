export const isNumber = (Value) => {
    return typeof Value === 'number' && !isNaN(Value);
}

export const isString = (Value) => {
    return typeof Value === 'string' && Value.trim() !== '';
}
