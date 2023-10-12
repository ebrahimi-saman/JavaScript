class Car{
    setName(name){
        this.name=name;    
    }

    startEngine(){
        console.log('Engine started for '+this.name);
    }

    stopEngine(){
        console.log('Engine stopped for '+ this.name);
    }

}

class Toyota extends Car{
    topSpeed(speed){
        console.log('top speed for '+this.name +' is '+speed);
    }
}

let car1 = new Toyota();

car1.setName('Camery');
car1.startEngine();
car1.topSpeed('240 Km/s');
car1.stopEngine();

