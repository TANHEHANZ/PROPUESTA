"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = void 0;
const prisma_error_1 = require("./prisma.error");
const http_1 = require("./http");
exports.API = {
    createResponse: (res, status, message, data, errors) => {
        const response = {
            status,
            message,
            metadata: {
                timestamp: new Date().toISOString(),
                path: res.req.originalUrl,
            },
        };
        if (data)
            response.data = data;
        if (errors)
            response.errors = errors;
        return res.status(status).json(response);
    },
    success: (res, message, data) => exports.API.createResponse(res, http_1.HTTP_STATUS.OK, message, data),
    created: (res, message, data) => exports.API.createResponse(res, http_1.HTTP_STATUS.CREATED, message, data),
    paginated: (res, message, paginatedData) => exports.API.createResponse(res, http_1.HTTP_STATUS.OK, message, paginatedData),
    badRequest: (res, message, errors) => exports.API.createResponse(res, http_1.HTTP_STATUS.BAD_REQUEST, message, undefined, errors),
    unauthorized: (res, message = "Unauthorized") => exports.API.createResponse(res, http_1.HTTP_STATUS.UNAUTHORIZED, message),
    forbidden: (res, message = "Forbidden") => exports.API.createResponse(res, http_1.HTTP_STATUS.FORBIDDEN, message),
    notFound: (res, message = "Not Found") => exports.API.createResponse(res, http_1.HTTP_STATUS.NOT_FOUND, message),
    conflict: (res, message, errors) => exports.API.createResponse(res, http_1.HTTP_STATUS.CONFLICT, message, undefined, errors),
    serverError: (res, message = "Error en el servidor contactate con hancito :)", errors) => {
        const errorDetails = (0, prisma_error_1.handlePrismaError)(errors);
        console.error("Server Error:", errors);
        return exports.API.createResponse(res, http_1.HTTP_STATUS.INTERNAL_SERVER, errorDetails.message, undefined, process.env.NODE_ENV === "development" ? errorDetails.details : undefined);
    },
    custom: (res, status, message, data, errors) => exports.API.createResponse(res, status, message, data, errors),
};
