import React, {createContext, useState, useEffect} from 'react'

export const DataContext = createContext()

export const  DataProvider = (props) => {
    const [products, setProducts] = useState([
        {
            "_id": "1",
            "title": "Wacth Product 01",
            "images": [
                "https://res.cloudinary.com/truetrue/image/upload/v1644606288/test/htzvyy5odspcc4igk830.jpg",
                "https://res.cloudinary.com/truetrue/image/upload/v1644593632/test/jxueoczmaxrmkxmdwwef.jpg"
                ],
                "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "colors": ["red", "black", "teal"],
                "sizes": ["XL", "L", "M", "XM", "LX"],
                "price": 1400,
                "count": 1
        },
        {
            "_id": "2",
            "title": "Wacth Product 02",
            "images": [
                "https://res.cloudinary.com/truetrue/image/upload/v1634092619/samples/ecommerce/shoes.png"
                ],
                "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "colors": ["red", "black", "teal"],
                "sizes": ["XL", "L", "M", "XM", "LX"],
                "price": 50,
                "count": 1
        },
        {
            "_id": "3",
            "title": "Wacth Product 03",
            "images": [
                "https://res.cloudinary.com/truetrue/image/upload/v1647333456/Mesas/Placa04_gfa5kn.jpg",
                "https://res.cloudinary.com/truetrue/image/upload/v1647333456/Mesas/Placa02_bhismp.jpg",
                "https://res.cloudinary.com/truetrue/image/upload/v1647333456/Mesas/Placa01_z6yefp.jpg",
                "https://res.cloudinary.com/truetrue/image/upload/v1647333456/Mesas/Placa03_zr1sfy.jpg"
                ],
                "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "colors": ["red", "black", "teal"],
                "sizes": ["XL", "L", "M", "XM", "LX"],
                "price": 325,
                "count": 1
        },
        {
            "_id": "4",
            "title": "Wacth Product 04",
            "images": [
                "https://res.cloudinary.com/truetrue/image/upload/v1634092627/samples/ecommerce/accessories-bag.jpg",
                "https://res.cloudinary.com/truetrue/image/upload/v1634092627/samples/ecommerce/leather-bag-gray.jpg",
                "https://res.cloudinary.com/truetrue/image/upload/v1634092624/samples/ecommerce/car-interior-design.jpg",
                "https://res.cloudinary.com/truetrue/image/upload/v1634092610/samples/ecommerce/analog-classic.jpg"
                ],
                "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "colors": ["red", "black", "teal"],
                "sizes": ["XL", "L", "M", "XM", "LX"],
                "price": 1015,
                "count": 1
        },
        {
            "_id": "5",
            "title": "Wacth Product 05",
            "images": [
                "https://res.cloudinary.com/truetrue/image/upload/v1647330937/Relojes/white01_eqz8oq.webp",
                "https://res.cloudinary.com/truetrue/image/upload/v1647330936/Relojes/white02_zhrvxt.jpg",
                "https://res.cloudinary.com/truetrue/image/upload/v1647330936/Relojes/white04_m9qcjl.jpg",
                "https://res.cloudinary.com/truetrue/image/upload/v1647330936/Relojes/white03_bnfgpp.jpg"
                ],
                "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "colors": ["red", "black", "teal"],
                "sizes": ["XL", "L", "M", "XM", "LX"],
                "price": 75000,
                "count": 1
        },
        {
            "_id": "6",
            "title": "Wacth Product 06",
            "images": [
                "https://res.cloudinary.com/truetrue/image/upload/v1647330935/Relojes/red03_souiou.webp",
                "https://res.cloudinary.com/truetrue/image/upload/v1647330935/Relojes/red04_qawf8a.jpg",
                "https://res.cloudinary.com/truetrue/image/upload/v1647330934/Relojes/red01_zrkygj.jpg",
                "https://res.cloudinary.com/truetrue/image/upload/v1647330934/Relojes/red02_oy0nle.jpg"
                ],
                "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "colors": ["green", "black", "teal"],
                "sizes": ["XL", "L", "M", "XM", "LX"],
                "price": 67000,
                "count": 1
        },
        {
            "_id": "7",
            "title": "Wacth Product 07",
            "images": [
                "https://res.cloudinary.com/truetrue/image/upload/v1647330934/Relojes/green02_iprbjg.jpg",
                "https://res.cloudinary.com/truetrue/image/upload/v1647330934/Relojes/green04_gqtkji.jpg",
                "https://res.cloudinary.com/truetrue/image/upload/v1647330934/Relojes/green03_od5ul5.jpg",
                "https://res.cloudinary.com/truetrue/image/upload/v1647330932/Relojes/22234424-sl44zo6epshyzeig0nny6o71-ExtraLarge_nfwww9.webp"
                ],
                "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "colors": ["green", "black", "teal"],
                "sizes": ["XL", "L", "M", "XM", "LX"],
                "price": 80000,
                "count": 1
        },
        {
            "_id": "8",
            "title": "Wacth Product 08",
            "images": [
                "https://res.cloudinary.com/truetrue/image/upload/v1644616671/test/uo5gcal2x0tzcbhmqmjc.jpg",
                "https://res.cloudinary.com/truetrue/image/upload/v1644616923/test/cda1rqdgjyrdfj1cn2y8.jpg",
                "https://res.cloudinary.com/truetrue/image/upload/v1644671951/test/chsej83mkchqyq3xigfr.jpg"
                ],
                "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "colors": ["green", "black", "teal"],
                "sizes": ["XL", "L", "M", "XM", "LX"],
                "price": 15,
                "count": 1
        }
        
        

        
        
    ])

    const [cart, setCart] = useState([])
    
    const addCart = (id)=>{
        const check = cart.every(item=>{
            return item._id !== id
        })
        if(check){
            const data  = products.filter(product =>{
                return product._id === id
            })
            setCart([...cart,...data])
        }else{
            alert("The product has been added to cart.")
        }
    }

    useEffect(()=>{
        const dataCart =  JSON.parse(localStorage.getItem("dataCart"))
        if(dataCart) setCart(dataCart)
    },[])

    useEffect(()=>{
        localStorage.setItem("dataCart", JSON.stringify(cart))
    },[cart])


    const value = {
        products: [products, setProducts],
        cart: [cart, setCart],
        addCart: addCart
    }
    
  return (
    <DataContext.Provider value={value}>
        {props.children}
    </DataContext.Provider>
  )
}
