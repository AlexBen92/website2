var app = new Vue({
    el: '#app',
    data: {
      
      taille: '',
      poids: '',
      gras:'',
      resultat:{
      ffmi: '00',
      des:"",
    }
    },
    methods: {
        CalculFFMI: function(){
            let taille2 = this.taille / 100
            let taille3 = Math.pow(taille2, 2)
            let poids2 = this.poids - this.gras
            let taille4 = 1.8 - taille2
            let taille5 = taille4 * 6.3
            let poids3 = poids2 / taille3
            let somme = poids3 + taille5;
            let res = somme.toFixed(1);
            this.resultat.ffmi = res;
            if(res => 17 && somme < 19.99){
                this.resultat.des = "Vous etês maigre"
            }
            if(res >= 20 && res < 22.99){
                this.resultat.des = "Vous etês sportif"
            }
            if(res >= 23 && res < 26.99){
                this.resultat.des = "Vous etês musclé"

            }
            if(res >= 27){
                this.resultat.des = "Vous avez dépassé la limite naturelle"

            }

        }
       
    },
  })


