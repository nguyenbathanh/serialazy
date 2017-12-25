
function expectNumberOrNil(maybeNumber: any): number {
    if (typeof(maybeNumber) === 'number') {
        return maybeNumber;
    } else if (maybeNumber instanceof Number) {
        return maybeNumber.valueOf();
    } else if (maybeNumber === null || maybeNumber === undefined) {
        return maybeNumber;
    } else {
        throw new Error(`Not a number (typeof: "${typeof(maybeNumber)}", value: "${maybeNumber}")`);
    }
}

/** JSON serializer for numbers */
export default {
    down: (originalValue: any) => expectNumberOrNil(originalValue),
    up: (serializedValue: any) => expectNumberOrNil(serializedValue)
};
