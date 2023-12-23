/* const products = [
    {
        id: "1",
        name:"Nike React 270",
        price: "USD 150" ,
        category: "Zapatillas",
        img: "https://acdn.mitiendanube.com/stores/001/160/313/products/501e13721-44c4c13dce9bafca5a16389082153840-640-0.webp",
        stock: 7,
        description: "Zapatillas running con tecnologia React para el mejor rendimiento"
    },
    {
        id: "2",
        name:"Nike Uptempo Black",
        price: "USD 700",
        category: "Zapatillas",
        img: "https://acdn.mitiendanube.com/stores/001/160/313/products/f89081c21-fe3513b27c4544650716294347921103-640-0.webp",
        stock: 3,
        description: "Zapatillas estilo botita de un clasico modelo retro."
    },
    {
        id: "3",
        name:"Nike Jordan 4 Black Cat",
        price: "USD 450",
        category: "Zapatillas",
        img: "https://acdn.mitiendanube.com/stores/001/160/313/products/075f94d91-463bd67f832103dcfd16946395950630-640-0.webp",
        stock: 8,
        description: "Zapatillas estilo botita de la linea Jordan, especificamente su edicion black cat"
    },
    {
        id: "4",
        name:"Medias 3/4 N.A.B 1",
        price: "USD 25",
        category: "Medias",
        img: "https://acdn.mitiendanube.com/stores/219/431/products/7b7d4489-02c5-431b-9bc4-35b7e827fb8e-868a9cb6fa7ded877f16935167208956-1024-1024.webp",
        stock: 15,
        description: "Medias de algodon importadas N.A.B"
    },
    {
        id: "5",
        name:"Medias 3/4 N.A.B 2",
        price: "USD 25",
        category: "Medias",
        img: "https://acdn.mitiendanube.com/stores/219/431/products/5e28ad48-3177-4be8-b780-18c02388df12-7ef8205453a5cb3aa616935191283285-1024-1024.webp",
        stock: 22,
        description: "Medias de algodon importadas N.A.B 2"
    },
    {
        id: "6",
        name:"Medias 3/4 Kongo",
        price: "USD 25",
        category: "Medias",
        img: "https://acdn.mitiendanube.com/stores/219/431/products/1f2ae0ab-0927-4b8d-8fbd-8fb64858ff75-dd9b624eeb93c665d116975486450544-1024-1024.webp",
        stock: 10,
        description: "Medias de algodon importadas Kongo"
    },    
    {
        id: "7",
        name:"Cordones reflex blue",
        price: "USD 60",
        category: "Cordones",
        img: "https://essential.vtexassets.com/arquivos/ids/864884-1200-auto?v=638235047007100000&width=1200&height=auto&aspect=true",
        stock: 25,
        description: "Cordones reflex de alta calidad color azul"
    },
    {
        id: "8",
        name:"Cordones reflex silver",
        price: "USD 60",
        category: "Cordones",
        img: "https://woker.vtexassets.com/arquivos/ids/226233-1200-1200?v=637656705190600000&width=1200&height=1200&aspect=true",
        stock: 12,
        description: "Cordones reflex de alta calidad color plata"
    },
    {
        id: "9",
        name:"Cordones reflex black",
        price: "USD 60",
        category: "Cordones",
        img: "https://do2padres.com/cdn/shop/products/WhatsApp-Image-2022-09-23-at-4-38-00-PM-632e0b1c4deac_700x.jpg?v=1684866621",
        stock: 35,
        description: "Cordones reflex de alta calidad color rosa"
    },
]

const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export { getProducts, getProductById, getProductsByCategory} */