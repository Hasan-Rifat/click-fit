import { User } from '@prisma/client';
import { Response } from 'express';

type IApiReponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string | null;
  token?: string | null;
  meta?: {
    page: number;
    limit: number;
    total: number;
  };
  data?: T | null;
  user?: User;
  clientSecret?: string;
};

const sendResponse = <T>(res: Response, data: IApiReponse<T>): void => {
  const responseData: IApiReponse<T> = {
    success: data.success,
    statusCode: data.statusCode,
    message: data.message || null,
    meta: data.meta || null || undefined,
    data: data.data || null || undefined,
    token: data.token || null || undefined,
    user: data.user || null || undefined,
    clientSecret: data.clientSecret || null || undefined,
  };

  res.status(data.statusCode).json(responseData);
};

export default sendResponse;
