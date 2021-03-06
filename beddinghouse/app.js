const cartBtn=document.querySelector(".cart-btn");
const closeCartBtn=document.querySelector(".close-cart");
const clearCartBtn=document.querySelector(".clear-cart");
const cartDOM=document.querySelector(".cart");
const cartOverlay=document.querySelector(".cart-overlay");
const cartItems=document.querySelector(".cart-items");
const cartTotal=document.querySelector(".cart-total");
const cartContent=document.querySelector(".cart-content");
const productsDOM=document.querySelector(".products-center");
//cart
let cart=[];
//buttons
let buttonsDOM =[];
//getting the products
class Products{
    async getProducts(){
        try{
            let result =await fetch('product.json');
            let data =await result.json();
            let products =data.items;
            products=products.map(item=>{
                const{title,price}=item.fields;
                const{id}=item.sys;
                const image=item.fields.image.fields.file.url;
                return{title,price,id,image};
            });
            return products;
        }
        catch(error){
            console.log(error);
        }
    }

}
//display products
class UI{
    displayProducts(products){
        products.forEach(products =>{
            productsDOM.innerHTML += 
            `<article class="product">
                <div class="img-container">
                    <img src='${products.image}' alt=""  class="product-img"/>
                    <button class="bag-btn" data-id='${products.id}'>
                        <i class="fas fa-shopping-cart"></i>
                        add to bag
                    </button>
                </div>
                <h3> ${products.title}</h3>
                <h4>$${products.price}"</h4>
            </article>`
            
        });
    } 
    getBagButtons(){
        const buttons=[...document.querySelectorAll(".bag-btn")];
        buttonsDOM=buttons;
        buttons.forEach(button =>{
            let id =button.dataset.id;
            let inCart= cart.find(item=>item.id===id);
            if(inCart){
                button.innerText="In cart";
                button.disabled=true;
            }
            else{
                button.addEventListener('click',(event)=>{
                    event.target.innerText="In cart";
                    event.target.disabled=true;
                         //get product from products
                let cartItem={...Storage.getProduct(id),amount:1};
                //add product to the cart
                cart =[...cart,cartItem];
                //add product to the cart
                Storage.saveCart(cart)
                //set cart values
                this.setCartValues(cart);
                //display cart item
                

                })
            }
        });

    }
}
//local storage
class Storage{
    static saveProducts(products){
        localStorage.setItem("products", JSON.stringify(products));

    }
    static getProduct(id){
        let products =JSON.parse(localStorage.getItem('products'));
        return products.find(product => product.id===id)
    }
    static saveCart(){
        localStorage.setItem('cart',JSON.stringify(cart));
    }


}


document.addEventListener("DOMContentLoaded" , ()=>{
    const ui =new UI();
    const products= new Products();

    //get all products
    products.getProducts().then(products => {ui.displayProducts(products);
    Storage.saveProducts(products);
    }).then(()=>{
        ui.getBagButtons();
    })
})