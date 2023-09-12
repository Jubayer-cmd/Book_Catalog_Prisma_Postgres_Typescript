import { Book } from "@prisma/client";
import { Request, RequestHandler, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../utils/catchAsync";
import pick from "../../../utils/pick";
import sendResponse from "../../../utils/sendResponse";
import { bookFilterableFields } from "./book.constants";
import { bookService } from "./book.service";

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await bookService.insertIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book created successfully",
    data: result,
  });
});

// get all books
const getBooks: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
    const filters = pick(req.query, bookFilterableFields);

    const result = await bookService.getAllBooks(filters, options);

    sendResponse<Book[]>(res, {
      statusCode: 200,
      success: true,
      message: "Books fetched successfully",
      meta: result.meta,
      data: result.data,
    });
  }
);

const getBooksbyCategory: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { categoryId } = req.params;
    const options = pick(req.query, ["limit", "page"]);
    const result = await bookService.getBooksbyCategoryService(
      categoryId,
      options
    );

    sendResponse<Book[]>(res, {
      statusCode: 200,
      success: true,
      message: "Books with associated category data fetched successfully",
      meta: result.meta,
      data: result.data,
    });
  }
);

const getUserById = catchAsync(async (req: Request, res: Response) => {
  const result = await bookService.getBookById(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book fetched successfully",
    data: result,
  });
});

const deleteFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await bookService.deleteFromDB(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book deleted successfully",
    data: result,
  });
});

const updateIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await bookService.updateIntoDB(req.params.id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book updated successfully",
    data: result,
  });
});

export const BookController = {
  insertIntoDB,
  getUserById,
  updateIntoDB,
  deleteFromDB,
  getBooks,
  getBooksbyCategory,
};
