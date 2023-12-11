import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { userServices } from './user.services';
import { imageCreate } from '../../../interfaces/common';

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await userServices.getAllFromDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Users fetched successfully',
    data: result,
  });
});

const createImage = catchAsync(async (req: Request, res: Response) => {
  const result = await userServices.createImage(req.file as imageCreate);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'create image successfully',
    data: result,
  });
});

const createUser = catchAsync(async (req: Request, res: Response) => {
  const result = await userServices.createUser(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User create successfully',
    data: result,
  });
});

export const UserController = {
  getAllFromDB,
  createUser,
  createImage,
};
