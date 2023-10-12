function Employee(name,age,baseSalary){
    this.name=name;
    this.age=age;
    this.baseSalary=baseSalary
    let monthlyBouns=1000;

    let CalculateFinalSalary = function(){
        let finalSalary=baseSalary+monthlyBouns;
        console.log('final Salary is: '+finalSalary)
    }

    this.getEmpDetails=function(){
        console.log('Name is: '+this.name+ ' and age is: '+this.age);
        CalculateFinalSalary();

    }
}


let emp1=new Employee('Jone',36,2000);
emp1.getEmpDetails();
//emp1.FinalSalary();

