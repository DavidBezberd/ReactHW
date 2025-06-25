import type { ICarts } from "./ICarts";

export interface ICartsResponseModel {
    total: number,
    skip: number,
    limit: number,
    carts: ICarts[]
}