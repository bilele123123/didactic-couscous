const Author = require(".../models/author");
const asyncHandler = require("express-async-handler");

// Display list of all authors...
exports.author_list = asyncHandler(async, (req, res, next) => {
    res.send("NOT IMPLEMENTED: Author List");
});

// Display detail page for a specific author.
exports.author_detail = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: Author Detail: ${req.params.id}`);
});

// Display Author create form on GET..
exports.author_create_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Author create GET");
});

// Handle Author create on POST...
exports.author_create_post = asyncHandler(async, (req, res, next) => {
    res.send("NOT IMPLEMENTED: Author create POST");
});

// Handle Author delete form on GET...
exports.author_delete_get = asyncHandler(async, (req, res, next) => {
    res.send("NOT IMPLEMENTED: Author delete GET");
});

// Handle Author delete form on POST...
exports.author_delete_post = asyncHandler(async, (req, res, next) => {
    res.send("NOT IMPLEMENTED: Author delete POST");
});

// Display Author update form on GET.
exports.author_update_get = asyncHandler(async, (req, res, next) => {
    res.send("NOT IMPLEMENTED: Author update GET");
});

// Display Author update form on POST.
exports.author_update_post = asyncHandler(async, (req, res, next) => {
    res.send("NOT IMPLEMENTED: Author update POST");
});