class Demo {
  constructor(public name: string, public id: number, private salary: number) {
    console.log(name);
    console.log(id + salary);
  }

  static demp2(salary) {
    console.log(salary);
  }
}

class Demo1 extends Demo {}

let Data = new Demo("sumit", 12, 4000);
console.log(Data);
