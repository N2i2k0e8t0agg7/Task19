const service = [
    {img: "assest/Clean.png", Name: "Wet Clean", Price: "₹200.00"},
    {img: "assest/iron.png", Name: "Iron", Price: "₹150.00"},
    {img: "assest/dry.png", Name: "Dry Clean",Price: "₹250.00"}
]

let cart = []
let i = 0

const show = document.querySelector(".show")
const order = document.querySelector(".seque")
const add = document.querySelector(".add")
const amount = document.querySelector(".amount")
const message = document.querySelector(".message")
const bookBtn = document.querySelector(".now")

function create(index){
    const card = document.createElement("div")
    const image = document.createElement("img")
    const detail = document.createElement("div")
    const p1 = document.createElement("p")
    const p2 = document.createElement("p")

    card.classList.add("card")
    detail.classList.add("details")

    image.src = service[index].img

    p1.innerText = service[index].Name
    p2.innerText = service[index].Price

    detail.append(p1, p2)

    card.append(image, detail)

    return card
}

show.append(create(i))

function nextService(){
    show.innerHTML = ""
    if(i + 1 >= service.length){
        i = 0
    }
    else{
        i++
    }
    show.append(create(i))
}

function updateCart(){
    order.innerHTML = ""
    bookBtn.style.backgroundColor="Blue"
    let sum = 0

    cart.forEach((element, index) => {
        const table = document.createElement("div")
        const p1 = document.createElement("p")
        const p2 = document.createElement("p")
        const span1 = document.createElement("span")
        const span2 = document.createElement("span")
        table.classList.add("listing")
        span1.innerText = index + 1
        span2.innerText = element.Name
        p1.append(span1, span2)
        p2.innerText = element.Price
        table.append(p1, p2)
        order.append(table)
        sum += Number(element.Price.replace("₹", "").replace(".00", ""))
    })
    amount.innerText = `₹${sum}.00`
}

add.addEventListener("click", () => {
    cart.push(service[i])
    updateCart()
    message.innerText = ""
    nextService()
})

bookBtn.addEventListener("click", () => {
    if(cart.length === 0){
        message.innerText = "⚠ Please add at least one item into cart"
    }else{
        message.style.color = "green"
        message.innerText = "✅ Booking Successful"
    }
})