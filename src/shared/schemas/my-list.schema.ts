import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class MyList extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: string;

  @Prop([{
    contentId: { type: Types.ObjectId, required: true },
    type: { type: String, enum: ['Movie', 'TVShow'], required: true },
    addedAt: { type: Date, default: Date.now }
  }])
  items: { contentId: string; type: string; addedAt: Date }[];
}

export const MyListSchema = SchemaFactory.createForClass(MyList);
