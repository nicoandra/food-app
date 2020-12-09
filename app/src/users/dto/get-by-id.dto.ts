import { IsMongoId } from 'class-validator';
import { ObjectID } from 'mongoose';

export class GetByIdDto {
    @IsMongoId()
    public id: ObjectID
}
