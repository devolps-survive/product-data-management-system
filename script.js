// Part One — Get Products
async function getProducts() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.products;
    } catch (error) {
        console.error('Error fetching products:', error.message);
    }
}

getProducts()

// Part Two — Display Products

function displayProducts(products) {
    products.forEach((product) => {
        console.log(`ID: ${product.id}
Title: ${product.title}
Price: $${product.price}
Rating: ${product.rating}
Stock: ${product.stock}
Category: ${product.category}
    
        `);
    })
}


// Part Three — Transform Product Data

getProducts().then(products => { return products.map(product => ({id: product.id, title: product.title, price: product.price, category: product.category})); }).then(transformed => console.log(transformed));

// Part Four — Search Products

function searchProducts(products, keyword) {
    return products.filter(product => product.title.toLowerCase().includes(keyword.toLowerCase()));
}

// Part Five — Find a Specific Product

function findProduct(products, id) {
    return products.find(product => product.id === id ? product : console.log("Product Is not Found"));
}

// Part Six — Filter by Price

function getAffordableProducts(products, maxPrice) {
    return products.filter(product => product.price <= maxPrice)
}

async function main() {
    const products = await getProducts();

    displayProducts(products);
    console.log(searchProducts(products, "Princess"));
    console.log(findProduct(products, 1));
    console.log(getAffordableProducts(products, 100));
}

main();

// Part Seven — Calculate Total Value

getProducts().then(products => {
   let totalInventoryValue = products.reduce((sum, pro) => sum + (pro.price * pro.stock), 0);
   let totalPrice = products.reduce((sum, pro) => sum + pro.price, 0);
   
   console.log(`Total Inventory Value: ${totalInventoryValue}`);
   console.log(`Total Price of All Products: ${totalPrice}`);
})

// Part Eight — Object Methods

getProducts().then(products => {
    const product = products[0]; // Example product
    const key = Object.keys(product);
    console.log(key);
    const value = Object.values(product);
    console.log(value);
    const enteries = Object.entries(product);
    console.log(enteries);

})

// Part Nine — Destructuring

getProducts().then(products => {
    // Array Destructuring

    const [productOne, productTwo] = products;
    console.log(productOne);
    console.log(productTwo);

    // Object Destructuring

    const product = products[0];
    const { title, price, category } = product;
    console.log(title);
    console.log(price);
    console.log(category);

})

// Part Ten — Spread Operator

function updateProduct(product, updatedPrice) {
    return { ...product, price: updatedPrice };
}

getProducts().then(products => {
    const product = products[3]; // Updated product
    console.log(updateProduct(product, 200));   
})

// Part Eleven — Create a Promise

function checkStock() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = {
                id: 1,
                name: 'Phone',
                stock: 10
            };

            if (product.stock > 0) {
                resolve('Product is in stock');
            } else {
                reject('Product is out of stock');
            }
        }, 1000);
        
    });
}

checkStock()
    .then(message => console.log(`Success: ${message}`))
    .catch(error => console.error(`Error: ${error}`))
    .finally(() => console.log('Stock check completed.'));

// Part Twelve — Convert to Async/Await

function getProduct() {
    return new Promise((resolve) => {
        setTimeout(() =>{ resolve({
             id: 1,
             name: 'Phone',
             stock: 10
        })}, 1000)
    })
}

async function checkingStock() {
    try {
        const product = await getProduct();
        if (product.stock > 0) {
            console.log('Product is in stock');
        } else {
            console.log('Product is out of stock');
        }
    }
    catch (error) {
        console.log(`Error: ${error}`);
    }

}

checkingStock();

//  Part Thirteen — Create a Product

async function createProduct(productData) {
    try {
        const newProduct = await fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        })

        if(!newProduct.ok) {
            throw new Error(`HTTP error! status: ${newProduct.status}`);
        }

        const data = await newProduct.json();
        console.log(data);
        
    } catch (error) {
        console.log(`Error: ${error}`);
    }
    
}

// Create a new product

createProduct(({
    title: 'Tablet',
    description: 'This is a brand new tablet with high performance and long battery life.',
    price: 10999.99,
    category: 'Electronics'
}));

// Part Fourteen — Update a Product

async function updateProducts(productId, updatedData) {
    try {
        const newProduct = await fetch(`https://dummyjson.com/products/${productId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })

        if(!newProduct.ok) {
            throw new Error(`HTTP error! status: ${newProduct.status}`);
        }

        const data = await newProduct.json();
        console.log(data);
        
    } catch (error) {
        console.log(`Error: ${error}`);
    }
    
}

updateProducts(1, {
    price: 214
});

// Part Fifteen — Delete a Product

async function deleteProduct(productId) {
    try {
        const newProduct = await fetch(`https://dummyjson.com/products/${productId}`, {
            method: 'DELETE'
        })

        if(!newProduct.ok) {
            throw new Error(`HTTP error! status: ${newProduct.status}`);
        } else {
            console.log(`Product with ID ${productId} has been deleted.`);
        }    
        
    } catch (error) {
        console.log(`Error: ${error}`);
    }
    
}

deleteProduct(1);


