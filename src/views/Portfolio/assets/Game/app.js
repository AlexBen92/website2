 new Vue({
    el: '#vue-app',
    data: {
            vie: 100,
            ended: false
    },
    methods: {
       poing: function(){
           this.vie -= 10;
           if( this.vie <=0 ){
               this.ended = true;
           }
       },
       recommence: function(){
          this.vie = 100;
          this.ended = false;
       }
        },
        computed:{

        }

  });