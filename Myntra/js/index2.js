onload()

let productList = [];

function onload() {

    let itemsContainerElement = document.querySelector(".itemsContainer")
    async function  fetchData(){
        const res = await fetch('https://dummyjson.com/products');
        const resJson = await res.json();
        const {products} = resJson;
        return products;
    }
    
    
    
    fetchData().then((response) => {
        
        let insideHtml = '';
        for(let i = 0; i<response.length; i++){
            productList.push(response[i])
        }
        
    
        productList.forEach((data) => {
            insideHtml += ` <div class="itemContainer">
    <img src="${data.images[0]}" alt="${data.category}" class="itemImage">
    <div class="rating">
        ${data.rating} | 1.4k
    </div>
    <div class="companyName">${data.brand}</div>
    <div class="itemName">${data.title}</div>
    <div class="price">
        <span class="currentPrice">Rs ${data.price}</span>
        <span class="originalPrice">Rs ${data.price + 1000}</span>
        <span class="discount">(${data.discount}% OFF)</span>
    </div>
    <button class="addToBag" onclick="addToBag(${data.id})">Add to bag</button>
    </div>`;
        })
    
        itemsContainerElement.innerHTML = insideHtml;
        
    })

}
