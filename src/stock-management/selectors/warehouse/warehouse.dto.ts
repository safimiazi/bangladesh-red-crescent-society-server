import { IsNotEmpty, IsString } from "class-validator";

export class CreateWareHouseDto {

    @IsNotEmpty()
    @IsString()
    name: string;
    
}