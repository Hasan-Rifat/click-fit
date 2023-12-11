import { prisma } from '../../../shared/prisma';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';

const getAllFromDB = async () => {
  const users = await prisma.user.findMany();

  // if user not found
  if (!users) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Users not found');
  }

  return users;
};

export const createImage = async (data: any) => {
  // create images by multer and save to server root folder
  const images = 
}

export const createUser = async (data: any) => {
  
}

export const userServices = {
  getAllFromDB,
  createUser,
  createImage,
};
