import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class User extends Document{
    @Prop({
        required: true,
        trim: true,
        index: true
    })
    name: string;
    @Prop({
        unique: true,
        required: true,
        trim: true,
        index: true
    })
    email: string;
    password: string;
    @Prop({
        default: ['client']
    })
    role: string[];
    status: boolean;
    @Prop({
        required: true,
        trim: true,
        index: true
    })
    barberia_id: string;
    created_at: Date;
    updated_at: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);