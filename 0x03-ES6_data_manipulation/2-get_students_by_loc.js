export default function getStudentsByLocation(arr, place) {
    return arr.filter(({location}) => location === place)
}