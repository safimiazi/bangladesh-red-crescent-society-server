import { IsNotEmpty, IsString } from "class-validator";

export class CreateStockinMianDto{

    @IsNotEmpty()
    @IsString()
    name: string;

    available: number;

    quantity: number;

    date: Date;
}