

let productArr = JSON.parse(localStorage.getItem("products"))

// console.log(productArr)

let gotoAddProducts = () =>{
    window.location.href = "../index.html"
}


 



productArr.forEach( ( {type,desc,price,image},index ) =>{

    let box = document.createElement("div");
    box.setAttribute("class","p_box")

    let p_type = document.createElement("p")
     p_type.setAttribute("id","p_type")
    p_type.innerText = type;
    

    let p_desc = document.createElement("p")
    p_desc.setAttribute("id","p_desc")

    p_desc.innerText = desc;

    let p_img = document.createElement("img")
    p_img.setAttribute("class","p_img")
    p_img.src = image;

    let p_price = document.createElement("p")
    p_price.setAttribute("id","p_price")
    p_price.innerText = price;
   

    let remove = document.createElement("button");
    remove.setAttribute("id","remove_product")
    remove.innerText = "Remove";
    remove.addEventListener("click", () =>{
           removeItems(index)
    });


    box.append(p_img, p_type, p_desc, p_price, remove  )

    document.getElementById("all_products").append(box)


})

let removeItems = (index) =>{
    // console.log("funn")

    productArr.splice(index,1)

    localStorage.setItem("products" , JSON.stringify(productArr));
    location.reload();
}