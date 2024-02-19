import { IsString } from "class-validator";

export class CreateItemsDto {

    @IsString()
    item: string;

}