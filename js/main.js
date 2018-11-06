function warrior(name, value_attack, value_defense){
    this.name = name;
    this.value_attack = value_attack;
    this.value_defense = value_defense;
    this.get_fight = function (opponent){
        
        while (this.value_defense > 0){
            
        this.value_defense = this.value_defense - opponent.value_attack;
        opponent.value_defense = opponent.value_defense - this.value_attack;
            if (this.value_defense == 0) {
                alert(this.name + " a remporté le combat");
                return;
                
            } else if (opponent.value_defense == 0) {
                alert(opponent.name + " a remporté le combat");
                return;
                
            }
        alert(this.name + " possede " + this.value_defense + " de vie");
        alert(opponent.name + " possede " + opponent.value_defense + " de vie");
        
        
        }
        
    };
    
}

var warrior_1 = new warrior("Vegeta", 10, 100);
var warrior_2 = new warrior("Sangoku", 10, 100);
var magician = new magician("Babidi", 10, 100, 100);
magician.get_fight_magician(warrior_1, warrior_2);

function magician(name, value_attack, value_defense, value_magician) {
    this.name = name;
    this.value_attack = value_attack;
    this.value_defense = value_defense;
    this.value_magician = value_magician;
    this.get_magic = function(){
        this.value_defense = this.value_defense + 10;
        this.value_magician = this.value_magician - 20;
    };
    this.get_fight_magician = function (warrior_1, warrior_2) {
        while(this.value_defense > 0 || warrior_1.value_defense > 0 || warrior_2.value_defense >0){
            
        alert(warrior_1.name + " attaque " + magician.name)
        this.value_defense = this.value_defense - warrior_1.value_attack;
        alert(this.name + " perd " + warrior_1.value_attack + ", sa vie est de " + this.value_defense);
        alert(warrior_2.name + " attaque " + this.name)
        this.value_defense = this.value_defense - warrior_2.value_attack;
        alert(this.name + " perd " + warrior_2.value_attack + ", sa vie est de " + this.value_defense);
        
        if(this.value_magician > 20){
            this.get_magic();
            alert(this.name + " c'est soigné, sa vie est de " + this.value_defense + " et sa magie est de " + this.value_magician)

        }else{
            alert(this.name + " n'as plus assez de point de magie pour se soigner !!");
        }
        if (this.value_defense == 0) {
            alert(this.name + " a perdu le combat");
        return;

        }
        else if (warrior_1.value_defense == 0) {
            alert(warrior_1.name + " a perdu le combat");
            return;

        }
        else if (warrior_2.value_defense == 0) {
            alert(warrior_2.name + " a perdu le combat");
            return;
        }
        alert(this.name + " attaque " + warrior_1.name);
        warrior_1.value_defense = warrior_1.value_defense - this.value_attack;
        alert(warrior_1.name + " perd " + this.value_attack + ", sa vie est de " + warrior_1.value_defense);
           
        }

    };

}