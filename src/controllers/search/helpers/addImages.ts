import { dbProductRequest, dbImageRequest } from "../calls";

export async function addImages (productsArray: any){
  const productsPromises = productsArray.map((e: any) => {
    return dbImageRequest(e.productId).catch((error: any) => {
      console.log("caught", error.message);
    });
  })
  return await Promise.all(productsPromises);
}