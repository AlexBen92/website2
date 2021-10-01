Vue.filter('currency', function(value) {
  return '€' + value.toFixed(2);
});

var app = new Vue ({
  el: "#main",
  data: {
    services: [
      {
        name: 'Maquette',
        price: 300,
        active: true
      },
      {
        name: 'Développement du site',
        price: 400,
        active: false
      },
      {
        name: 'Système de Login + Panier',
        price: 500,
        active: false
      },
      {
        name: 'Référencement Google',
        price: 200,
        active: false
      }
    ]
  },
  methods: {
    toggleActive: function(s) {
      s.active = !s.active;
    },
    total: function() {
      var total = 0;
      
      this.services.forEach(function(s) {
        if (s.active) {
          total += s.price;
        }
      });
      
      return total;
    }
  }
});