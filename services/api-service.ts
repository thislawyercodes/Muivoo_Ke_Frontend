import { apiService } from "./http";


export const FetchAllProducts = {
    getAllProducts<T>(): Promise<T> {
        return apiService.get("api/products",false);
    },
    
    getProductDetails<T>(productId:string): Promise<T> {
        return apiService.get("api/products/productId");
    }
};
