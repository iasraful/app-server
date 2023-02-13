/** @format */

const asyncHandler = require("express-async-handler");
const User = require("../models/userModels");
// Get all the Users
// @route  GET /api/users
// @Access Public
const getUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};

//@Create new User--
// @route  POST /api/users
// @Access Public
const createUser = async (req, res) => {
  console.log("The request body is : ", req.body);
  const { name, selector, checkbox } = req.body;
  if (!name || !selector || !checkbox) {
    res.status(400);
    throw new Error("All the fields are mandatory");
  }
  const user = await User.create({
    name,
    selector,
    checkbox,
  });
  res.status(200).json(user);
};
//@Get  User--
// @route  GET /api/users/:id
// @Access Public
const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

//@Update  User--
// @route  PUT /api/users/:id
// @Access Public
const updateUser = asyncHandler(async (req, res) => {
  const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updateUser);
});

//@Delete  User--
// @route  DELETE /api/users/:id
// @Access Public
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  await User.remove();
  res.status(200).json(user);
});

module.exports = { getUsers, createUser, getUser, updateUser, deleteUser };
