import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/user/user.model';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async register() {
    const newUser = new this.userModel({
      email: 'ozdemeir02@mgail.com',
      fullName: 'SB',
      passwordHash: '123',
    });
    return newUser.save();
  }
}
