
let cards = document.querySelector('.cards')
let hide = document.querySelector('.hide')
let menu = document.querySelector('.menu')
let first = document.querySelector('.first')
let ul = document.querySelector('ul')
let allchecked = document.querySelector(".allchecked")
let cart = document.querySelector(".cart")



// pages

let onecard =document.querySelectorAll("#onecard")
onecard[0].style.display ='flex'
   function showcard(id){
   for(let i =0;i<onecard.length;i++){
 if(id=="page1"){
   onecard[i].style.display ='none'
   onecard[0].style.display ='flex'
 } else if(id =="page2"){
   onecard[i].style.display ='none'
   onecard[1].style.display ='flex'
 } else if(id =="page3"){
   onecard[i].style.display ='none'
   onecard[2].style.display ='flex'
 } else if(id =="page4"){
   onecard[i].style.display ='none'
   onecard[3].style.display ='flex'
 } else if(id =="page5"){
   onecard[i].style.display ='none'
   onecard[4].style.display ='flex'
 }
   }
}

// ul hide and visibak
menu.addEventListener('click', () => {
   menu.classList.toggle("change")
   first.classList.toggle('hide')
   ul.classList.toggle("hideul")
})
// scroll arrow
let btn = document.getElementById('btn')
btn.style.display = 'none   '
window.onscroll = () => {
   if (scrollY >= 432) {
      btn.style.display = "block"
   } else {
      btn.style.display = "none"
   }
}
btn.onclick = () => {
   scroll({
      top: 0,
      behavior: "smooth"
   })
}
// hide nad show cart
let showimgcart =document.querySelector(".showimg-cart")
let cartitem =document.querySelector(".cartitem")
let ex =document.querySelector(".ex")
showimgcart.onclick =()=>{
cartitem.classList.remove("hideallcart")
showbtn()
}
ex.onclick=()=>{
   cartitem.classList.add("hideallcart")
   showbtn()
}

// show cart
let cardbox = document.querySelector(".cart-box")
let card = document.querySelectorAll(".cards .card")
let exit = document.querySelector(".exit")
let imgbox = document.querySelector(".img-box")
let pricebox =document.querySelector(".pricebox")
let imgcart =document.querySelectorAll(".img-cart")


   for(let i = 0;i<card.length;i++){
      card[i].addEventListener("click",()=>{
           cardbox.classList.remove("hidebuycar")
   exit.onclick = () => {
       cardbox.classList.add("hidebuycar")
    }
         let img=document.querySelectorAll(`.imge img`)[i]
           imgbox.innerHTML = `
            <img src="${img.src}">
         `
         let lastprice =document.querySelectorAll("#lastprice span")[i]
         pricebox.innerHTML = `
         <p>$<span>${lastprice.innerHTML}</span></p>
         `
         
      })
   }

// buycart
 let easycart = document.querySelectorAll(".cart")
let price = document.querySelectorAll(".price p")
let tbody= document.getElementById("tbody")
let imgcount =document.querySelector(".showing span")
let array= []
if (localStorage.product != null) {
   array = JSON.parse(localStorage.product)
   tbody.innerHTML = JSON.parse(localStorage.product) 
   imgcount.innerHTML = array.length
   localStorage.product = JSON.stringify(array)
  
}
 else {
    array = []
}

for(let i =0;i<easycart.length;i++){
   easycart[i].addEventListener("click",()=>{
      let img=document.querySelectorAll(`.imge img`)[i]
      let pricecart = document.querySelectorAll("#lastprice  span")[i]
      let table =''
      let ob = {
         img:img,
         td: table +=`
                  <tr >
               <td><img class="td-img"  src="${img.src}" alt=""></td>
               <td>1</td>
               <td>$${pricecart.innerHTML}</td>
            <td>$${pricecart.innerHTML}</td>
            <td><button onclick="deleteitem(${this.length})" id="deletebtn" type="button">delete</button></td>
         </tr>
         `
         
      }
      array.push(ob.td)
      localStorage.setItem('product', JSON.stringify(array))
      tbody.innerHTML = JSON.parse(localStorage.product) 
      imgcount.innerHTML = array.length
      showbtn()
   })
}
// Add to cart
let buybtn =document.querySelector('#buybtn')

buybtn.addEventListener("click",()=>{
   let count =document.getElementById('count')
let pricecart =document.querySelector(".pricebox p span")
let cartimg = document.querySelector(".img-box img")
   

  
   let table = ''
   let ob = {
      td: table += `
     <tr >
         <td><img class="td-img"  src="${cartimg.src}" alt=""></td>
         <td>${count.value}</td>
         <td>$${pricecart.innerHTML}</td>
      <td>$${+pricecart.innerHTML * +count.value }</td>
      <td ><button onclick="deleteitem(${this.length})"   id="deletebtn" type="button">delete</button></td>
   </tr>
   `
   }
   array.push(ob.td)
   localStorage.setItem('product', JSON.stringify(array))
   tbody.innerHTML = JSON.parse(localStorage.product) 
   imgcount.innerHTML = array.length
   showbtn()
})

function deleteitem(i){
      array.splice(i,1)
   localStorage.product =JSON.stringify(array)
   tbody.innerHTML =JSON.parse(localStorage.product)
   imgcount.innerHTML = array.length
   showbtn()
} 


let buy =document.querySelector(".buy")

function showbtn(){
    if(tbody.innerHTML !=''){
    buy.innerHTML =`
    <button type="submit">buy all</button>
    `
} else {
    buy.innerHTML=''
}
}
showbtn()
