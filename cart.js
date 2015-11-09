// A prototype shopping cart example

var cartProto = {
      items: [],
      addItem: function addItem(item) {
        this.items.push(item);
      }
    },
    
    createCart = function (items) {
      var cart = Object.create(cartProto);
      cart.items = Object.create(items);
      return cart;
    },

    // Load cart with stored items.
    savedCart = createCart(['alpha', 'bravo', 'charlie', 'delta']),

    session = {
      get: function get() {
        return this.cart;
      },
      cart: createCart(saved.items)
    };


// Session interaction
session.get();
session.cart.addItem('echo');
session.cart.items.indexOf('echo');
