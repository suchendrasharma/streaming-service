import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Movie extends Document {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop([String])
  genres: string[];

  @Prop()
  releaseDate: Date;

  @Prop()
  director: string;

  @Prop([String])
  actors: string[];
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
