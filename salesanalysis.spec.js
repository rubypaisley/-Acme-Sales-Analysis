describe('products purchased', function(){
    it('is a function', function(){
        expect(typeof productsPurchased).toEqual('function');
    });
    it('returns an array of objects purchased', function(){
        expect( productsPurchased(orders, products) ).toEqual( [ {
            id: 1,
            name: 'foo',
            price: 7
          }, 
          {
            id: 5,
            name: 'bazz',
            price: 1
          }] );
    });
});

describe('top selling product by quantity', function(){
    it('is a function', function(){
        expect(typeof topSellingProductByQuantity).toEqual('function');
    });
    it('returns the top selling product object', function(){
        expect( topSellingProductByQuantity(orders, products) ).toEqual(  {
            id: 5,
            name: 'bazz',
            price: 1,
            quantity: 71,
          } );
    });
});

describe('users with orders', function(){
    it('is a function', function(){
        expect(typeof usersWithOrders).toEqual('function');
    });
    it('returns only users who have placed an order', function(){
        expect( usersWithOrders(users, orders)).toEqual([ {
            id: 1,
            name: 'moe'
         },  
         {
            id: 3,
            name: 'curly'
         }]);
    });
});