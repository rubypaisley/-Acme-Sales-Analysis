const productsPurchased = (orderArr, prodArr) => {
    return prodArr.filter((product) => {
        return orderArr.find((order) => {
            return product.id === order.productId;
        })
    })
}

const topSellingProductByQuantity = (orderArr, prodArr) => {
    let productsByQuantitySold = orderArr.reduce((accum, order) => {
        let currentProduct = prodArr.find((elem) => {
            return elem.id === order.productId;
        });
            if (accum.find(elem => elem.name === currentProduct.name)){
                let idx = accum.findIndex(elem => elem.name === currentProduct.name);
                accum[idx].quantity += order.quantity;
            }
        else {
            currentProduct.quantity = order.quantity
            accum.push(currentProduct);
        }
        return accum;
    }, [] );

   productsByQuantitySold.sort(function(a, b){
        if (b.quantity > a.quantity){
            return 1;
        } else if (a.quantity > b.quantity){
            return -1;
        } else {
            return 0;
        }
    });
    return productsByQuantitySold[0]; 
}

const usersWithOrders = (userArr, orderArr) => {
    return userArr.reduce((accum, user) => {
        if (orderArr.find(order => order.userId === user.id)){
            accum.push(user);
        }
        return accum;
    }, []);
}

const products = [
    {
      id: 1,
      name: 'foo',
      price: 7
    },
    {
      id: 2,
      name: 'bar',
      price: 2
    },
    {
      id: 5,
      name: 'bazz',
      price: 1
    },
  ];
  
  const users = [
    {
       id: 1,
       name: 'moe'
    },
    {
       id: 2,
       name: 'larry'
    },
    {
       id: 3,
       name: 'curly'
    }
  ];
  
  const orders = [
    {
      id: 1,
      productId: 1,
      quantity: 3,
      userId: 1
    },
    {
      id: 2,
      productId: 1,
      quantity: 7,
      userId: 1
    },
    {
      id: 3,
      productId: 5,
      quantity: 70,
      userId: 3
    },
    {
      id: 3,
      productId: 5,
      quantity: 1,
      userId: 3
    }
  ];