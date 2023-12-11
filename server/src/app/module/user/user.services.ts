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
  //create user by prisma

  const user = await prisma.user.findFirst({
    where: {
      email: data.email,
    },
  });

  // if user not found
  if (user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User already exist');
  }

  const userData = await prisma.user.create({
    data: {
      ...data,
    },
  });

  // create user by  mysql query

  /* 
  table name: user
  CREATE TABLE users (
    ID INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL,
    password VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL,
    type VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL,
    active TINYINT DEFAULT 1,
    PRIMARY KEY (ID)
);


  */

  return userData;
};

export const userServices = {
  getAllFromDB,
  createUser,
  createImage,
};
