import { Key, MouseEventHandler } from "react";

export interface UtilButtonProps{
    title:string;
    containerStyles?:string;
    handleClick?:MouseEventHandler<HTMLButtonElement>
    btnType?:"submit"|"button" ;
}

export interface SearchVendorProps{
    vendor:string;
    searchVendor:(vendor:string)=>void

}

export interface ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Product[];
}
export interface Product {
    map(arg0: (product: Product) => import("react").JSX.Element): import("react").ReactNode;
    id: Key | null | undefined;
    title: string;
    description: string;
    price: number;
    product_image: string;
  }

  export interface ProductCardProps {
    product: Product;
  }
  