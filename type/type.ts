type StaticImageData = {
    src: string;
    height: number;
    width: number;
    placeholder?: string;
};
export type Product = {
    id: string,
    image: string,
    productName: string,
    normalPrice: number,
    salePrice?: number,
}
export type Service = {
    src: string | StaticImageData ,
    title: string,
    content: string,
    more: string | any,
  }
export type Slide = {
    id:number,
    className:string,
    subtitle: string,
    maintitle: string,
    btntitle: string,
}
export type Popular = {
    id: number,
    image: string,
    categories: string,
    title: string,
    time: string,
    price: string,
    contentHover: string,
}
export type CountUp = {
    countNumber: number,
    title: string, 
}
export type Features = {
    src: any,
    title: string,
    content: string,
    button: string,
}