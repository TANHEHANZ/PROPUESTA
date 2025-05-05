"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlePrismaError = void 0;
const library_1 = require("@prisma/client/runtime/library");
const handlePrismaError = (error) => {
    if (error instanceof library_1.PrismaClientKnownRequestError) {
        switch (error.code) {
            case "P2002":
                return {
                    message: "Unique constraint violation",
                    details: `The field ${error.meta?.target} already exists`,
                };
            case "P2014":
                return {
                    message: "Invalid ID",
                    details: "The provided ID does not exist in the database",
                };
            case "P2003":
                return {
                    message: "Foreign key constraint failed",
                    details: `Related record not found`,
                };
            default:
                return {
                    message: "Database error",
                    details: error.message,
                };
        }
    }
    if (error instanceof library_1.PrismaClientValidationError) {
        return {
            message: "Validation error",
            details: error.message,
        };
    }
    return {
        message: "Unexpected error",
        details: error.message,
    };
};
exports.handlePrismaError = handlePrismaError;
