class Employee{

    constructor(name,id){
        this.name=name;
        this.id=id;
    }
}


let emp1= new Employee("saman", "SAEB004");
let emp2 = new Employee("Ali","ALEB001");

console.log(emp1.name +' has ID : '+ emp1.id);

console.log(emp2.name+' has ID : ' + emp2.id);


