import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';

export const PublicRoute = (...args: string[]) => SetMetadata(IS_PUBLIC_KEY, args);
