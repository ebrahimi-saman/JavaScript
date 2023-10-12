class Animal {

    constructor (name){
        this.name=name;
    }

    eats (){
        console.log(this.name+' eats food!');
        }
}


class Aligator extends Animal{
    eats(){
    //here is polymorphism
        super.eats();
        console.log(this.name+ ' eats fishes!')
        }
}

let murphy = new Aligator('Murphy');

murphy.eats();

