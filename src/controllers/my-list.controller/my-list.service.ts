import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MyList } from 'src/shared/schemas/my-list.schema';
import { AddToListDto } from 'src/shared/dtos/add-to-list.dto';
import { RemoveFromListDto } from 'src/shared/dtos/remove-from-list.dto';

@Injectable()
export class MyListService {
  constructor(
    @InjectModel(MyList.name) private readonly myListModel: Model<MyList>,
  ) {}

  async addToList(dto: AddToListDto, headers) {
    const { userId, contentId, type } = dto;

    let list = await this.myListModel.findOne({ userId });
    if (!list) list = new this.myListModel({ userId, items: [] });

    const exists = list.items.some(i => i.contentId.toString() === contentId);
    if (exists) return { message: 'Already exists in list' };

    list.items.push({ contentId, type, addedAt: new Date() });
    await list.save();
    console.log(`Added ${contentId} for user ${userId}`);
    return { message: 'Added successfully' };
  }

  async removeFromList(dto: RemoveFromListDto, headers) {
    const { userId, contentId } = dto;
    const list = await this.myListModel.findOne({ userId });
    if (!list) return { message: 'List not found' };

    list.items = list.items.filter(i => i.contentId.toString() !== contentId);
    await list.save();
    console.log(`🗑️ Removed ${contentId} from user ${userId}`);
    return { message: 'Removed successfully' };
  }

  async getList(userId: string, page = 1, limit = 10) {
    const list = await this.myListModel.findOne({ userId }).lean();
    if (!list) return { items: [] };

    const skip = (page - 1) * limit;
    const items = list.items.slice(skip, skip + limit);

    return { total: list.items.length, page, items };
  }
}
