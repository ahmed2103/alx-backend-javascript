export default function cleanSet(set, startString) {
    const arr = [];
    for (const value of set) {
       if (value.startsWith(startString)) {
           arr.push(value.slice(startString.length));
       }
    }
    return arr.join('-');
}