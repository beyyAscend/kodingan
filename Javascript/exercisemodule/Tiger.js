class Tiger{
    constructor(){
        this.strength = Math.floor(Math.random() * 100);
    }

    growl(){
        return 'grrrrrr'
    }
}

module.exports = Tiger
class Wolf{
    constructor(){
      this.strength = Math.floor(Math.random() * 100);
    }
  
    howl() {
      return 'Auuuuuuuuu';
    }
  }
