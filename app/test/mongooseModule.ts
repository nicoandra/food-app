import { MongooseModule } from '@nestjs/mongoose';
const mongoSettings = `mongodb://${process.env.MONGODB_HOST}/${process.env.MONGODB_DB}`
const mongooseModule = MongooseModule.forRoot(mongoSettings)

export { MongooseModule }