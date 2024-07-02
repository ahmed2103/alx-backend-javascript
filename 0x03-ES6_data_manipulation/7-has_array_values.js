export default function hasValuesFromArray(set, array) {
    array.every(value => set.has(value));
}