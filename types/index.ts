import { MouseEventHandler } from "react";

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