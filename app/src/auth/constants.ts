export { APP_GUARD } from '@nestjs/core';
export const jwtConstants = {
  secret: process.env["AUTH_JWT_SECRET_KEY"],
};