
function abc(a: number | string ) {
    if (typeof a === "number") {
        return "number"
    }
    else if (typeof a === "string") {
        return 'string'
    }
    else {
        throw new Error("THis is as error")
    }
}

abc(12)
abc("string")
