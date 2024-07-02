export default function createInt8TypedArray(length, position, value) {
    if (position < 0 || position >= length) {
        throw new Error('position outside range');
    }
    const buffer = new ArrayBuffer(length);
    const view = new Uint8Array(buffer);
    view.setInt8(position, value);
}