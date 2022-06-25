export class Product {
    id: number
    category: string
    name: string
    price: number
    image: string
    dimension: string
    weight: number
    material: string
    description: string
    in_wishlist: boolean
    in_cart: boolean
    offers: [{
        id: number,
        discount_percentage: number,
        coupon_code: string
    }]

    constructor(id: number,
        category: string,
        name: string,
        price: number,
        image: string,
        dimension: string,
        weight: number,
        material: string,
        description: string,
        in_wishlist: boolean,
        in_cart: boolean,
        offers: [{ id: number, discount_percentage: number, coupon_code: string }]
    ) {
        this.id = id
        this.category = category
        this.name = name
        this.price = price
        this.image = image
        this.dimension = dimension
        this.weight = weight
        this.material = material
        this.description = description
        this.in_wishlist = in_wishlist
        this.in_cart = in_cart
        this.offers = offers
    }
}