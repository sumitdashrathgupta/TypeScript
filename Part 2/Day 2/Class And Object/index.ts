//! Class and Constructor 

/*class Demo {
    constructor(public name: string, private Pan: number) {
        this.name = name
        this.Pan = Pan
    }
}

const d1 = new Demo("sumit", 400605)
console.log(d1)  */



//! Access Modifier public, private ,protected


class Demo {
    constructor(public name: string, protected Pan: number) {
        this.name = name
        this.Pan = Pan
    }
}

class Demo1 extends Demo {
    public name = "amit"


    change() {
        this.Pan = 113
        this.name = "working"
    }

}

const d1 = new Demo("sumit", 400605)
const d2 = new Demo1("w", 12)
console.log(d1)
console.log(d2.change)

