//store the products array in localstorage as "products"


// document.getElementById("show_products").addEventListener("click",gotoShowProducts)


let gotoInventory = () =>{
    window.location.href = "../inventory.html"

}


let productArr = JSON.parse(localStorage.getItem("products")) || [];



 let addProduct = () =>{
    //  console.log("funn")
     event.preventDefault()

     let p_type = document.getElementById("type").value 
     let p_desc = document.getElementById("desc").value 
     let p_price = document.getElementById("price").value 
     let p_image = document.getElementById("image").value 



     

let obj ={
    type: p_type,
    desc: p_desc,
    price: p_price,
    image: p_image 
    }

// console.log(obj)
 productArr.push(obj);

 localStorage.setItem("products" , JSON.stringify(productArr));

document.getElementById("type").value = null;  
document.getElementById("desc").value = null;  
document.getElementById("price").value = null;  
document.getElementById("image").value  = null; 


 }









