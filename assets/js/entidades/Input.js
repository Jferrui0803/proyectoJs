export default class Input {
    #type;
    #input;
    constructor(type, input) {
        this.#type = type;
        this.#input = input;
    }
    get type() {
        return this.#type;
    }
    get input() {
        return this.#input;
    }
}