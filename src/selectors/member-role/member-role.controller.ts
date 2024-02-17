/* eslint-disable prettier/prettier */
import { MemberRoleTable } from './member-role.entity';
import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { MemberRoleService } from './member-role.service';
import { CreateMemberRoleDto } from './create-member-role-dto';

@Controller('member-role')
export class MemberRoleController {

    constructor(private readonly memberRoleService: MemberRoleService) { }

    @Post()
    async createMemberRole(@Body() createMemberRoleDto: CreateMemberRoleDto): Promise<{ message: string; memberRoleTable: MemberRoleTable }> {
        try {
            const memberRole = await this.memberRoleService.createMemberRole(createMemberRoleDto);
            console.log(memberRole);
            return { message: "member role created successfully", memberRoleTable: memberRole };
        } catch (error) {
            console.log(error);
            throw new HttpException({ message: "An unexpected error occurred." }, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }


    @Get()
    async getAllMemberRole(): Promise<{ message: string; memberRole: MemberRoleTable[] }> {
        try {
            const allMemberRole = await this.memberRoleService.getAllMemberRole()
            return { message: "successfully get the all bloodGroup", memberRole: allMemberRole }
        } catch (error) {
            console.log(error);
            throw new HttpException({ message: "Unexpected error occurred" }, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}