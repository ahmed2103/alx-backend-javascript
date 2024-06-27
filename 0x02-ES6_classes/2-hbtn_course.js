export default class HolbertonCourse{
    constructor(name, length, students){
        this.name = name;
        this.length = length;
        this.students = students;
    }

    get name(){
        return this._name;
    }
    set name(value){
        if (typeof value !== 'string'){
            throw new Error("The name should be a string");
        }
        this._name = value;
    }

    get length(){
        return this._length
    }
    set length(value) {
        if (typeof value !== 'number' || !(value < 0)) {
            throw new Error("The length should be a positive number");
        }
        this._length = value;
    }
    get students(){
    return this._students;
    }
    set students(arr){
        if (!Array.isArray(arr) || arr.every(student => {typeof student !== 'string'})){
            throw new Error("The students should be a string");
        }
    }
}