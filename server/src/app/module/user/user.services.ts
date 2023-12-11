import { prisma } from '../../../shared/prisma';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';
import { User } from '@prisma/client';
import { imageCreate } from '../../../interfaces/common';

const getAllFromDB = async (): Promise<User[]> => {
  const users = await prisma.user.findMany();

  // if user not found
  if (!users) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Users not found');
  }

  return users;
};

export const createImage = async (data: imageCreate): Promise<void> => {
  // create images by multer and save to server root folder
  console.log(data);
};

export const createUser = async (data: User): Promise<User | null> => {
  const user = await prisma.user.create({
    data: {
      ...data,
    },
  });

  // if user not found
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  return user;
};

export const userServices = {
  getAllFromDB,
  createUser,
  createImage,
};
