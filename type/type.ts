export type Product = {
    id: string,
    image: string,
    productName: string,
    normalPrice: number,
    salePrice?: number,
}
export type Service = {
    src: string,
    title: string,
    content: string,
    more: string,
}