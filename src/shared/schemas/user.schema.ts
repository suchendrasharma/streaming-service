import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  username: string;

  @Prop([String])
  favoriteGenres: string[];

  @Prop([String])
  dislikedGenres: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
