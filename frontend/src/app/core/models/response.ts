import { Movie } from "./movie";
import { User } from "./user";

export interface Response {

    data: string | number | Movie | User,
    message: string,
    status: number,
    
}