fetch("https://yashravuri.github.io/E-comerce/data/data.json").then(response=>{
    return response.json()
    }).then(data=>{
    displayData(data)
    })
    
    function displayData(info){
    //console.log(info.mobiles[info.mobiles.length-1])
    //var element=document.getElementsByTagName("div");
    //console.log(element[1].innerHTML)
    //var element=document.getElementsByClassName("div");
    //console.log(element[1].innerHTML)
    //var element=document.getElementById("div");
    //console.log(div[0])
    //var element=document.querySelectorAll("div")
    //console.log(element[1])
    //var nodeData=document.
    //querySelectorAll(".element")
    //var body=document.querySelector("body")
    //newElement.textContent="jhfkd jnsd sdnsik"
    //console.log(newElement)
    //body.append(newElement)
       
     var bodyElement=document.querySelector("body");
     var row=document.createElement("section")
     row.classList.add("row","justify-content-center");
     bodyElement.append(row);
      info.mobiles.map(value=>{
      var column=document.createElement("article")
      column.classList.add("col-sm-10","col-md-6","col-lg-3")
      row.append(column);
      //card
      var card=document.createElement("div");
      card.classList.add("card","mt-4");
      //card-body
      var cardBody=document.createElement("div");
      cardBody.classList.add("card-body");
      //image
      var imageElement=document.createElement("img");
      imageElement.src=value.image;
      imageElement.classList.add("img-responsive");
      imageElement.alt=value.name;
      //Name
      var name=document.createElement("h2")
      name.textContent=value.name;
      name.classList.add("text-center", "text-danger")
      //price
      var price=document.createElement("p");
      price.classList.add("text-success","text-center")
      price.innerHTML="<s>"+"₹"+value.price+"/-";
      //o price
      var oprice=document.createElement("p");
      oprice.textContent=value.Oprice;
      oprice.classList.add("text-info","text-center")
      oprice.innerHTML="₹"+value.Oprice+"/-";
      //button
      var buttonparent=document.createElement("div");
      buttonparent.classList.add("d-grid","gap-2");
      var button=document.createElement("button");
      button.classList.add("btn" ,"btn-info","btn-outline-danger");
      button.textContent="add to cart";
             buttonparent.append(button)
    
      //buy
       var buttonparent2=document.createElement("div");
      buttonparent2.classList.add("d-grid","gap-2");
      var button=document.createElement("button");
      button.classList.add("btn" ,"btn-success","btn-outline-warning");
      button.textContent="Buy now";
             buttonparent2.append(button)
      cardBody.append(imageElement);
      cardBody.append(name)
            cardBody.append(price)
            cardBody.append(oprice)
            cardBody.append(buttonparent)
            cardBody.append(buttonparent2)
    
    
    
      card.append(cardBody);
    
      column.append(card);
    
      })
    }
    
    
