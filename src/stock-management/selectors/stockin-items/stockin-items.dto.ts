import { IsNotEmpty, IsString } from "class-validator";

export class CreateStockinItemsDto {
    @IsNotEmpty()
    @IsString()
    name: string;
}