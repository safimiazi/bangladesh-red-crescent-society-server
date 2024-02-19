import { IsNotEmpty, IsString } from "class-validator";

export class CreateItemDto {

    @IsNotEmpty()
    @IsString()
    item: string;

}