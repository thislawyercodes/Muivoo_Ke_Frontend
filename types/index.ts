import { MouseEventHandler } from "react";

export interface UtilButtonProps{
    title:string;
    containerStyles?:string;
    handleClick?:MouseEventHandler<HTMLButtonElement>
    btnType?:"submit"|"button" ;
}