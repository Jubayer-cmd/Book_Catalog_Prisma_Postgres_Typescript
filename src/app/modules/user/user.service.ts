import { User } from "@prisma/client";
import prisma from "../../../utils/prisma";

const getAllFromDb = async (): Promise<User[]> => {
  const result = await prisma.user.findMany();
  return result;
};

const getUserById = async (id: string): Promise<User | null> => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const getSingleUser = async (
  id: string
): Promise<Omit<User, "password"> | {}> => {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  const { password, ...rest } = user || {};
  return rest;
};

const updateIntoDB = async (
  id: string,
  payload: Partial<User>
): Promise<User> => {
  const result = await prisma.user.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteFromDB = async (id: string): Promise<User> => {
  const result = await prisma.user.delete({
    where: {
      id,
    },
  });
  return result;
};

export const userService = {
  getAllFromDb,
  getUserById,
  updateIntoDB,
  deleteFromDB,
  getSingleUser,
};
