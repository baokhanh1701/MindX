const asyncHandler = require('express-async-handler');
const userModel = require('../models/userModel');

const registerUser = asyncHandler(async () => {
    //xu ly có lỗi trong controller thì sẽ bắn lỗi ra error middleware và trả lỗi dạng json cho user
    const { name, email, password } = req.body;

    const userExists = await userModel.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error('User existed');
    }

    const newUser = await userModel.create({ name, email, password });
    if (newUser) {
        res.status(200).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            isAdmin: newUser.isAdmin
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});
const authLogin = () => {

}

const getUserProfile = () => {

}

const getAllUsers = () => {

}

module.exports = { registerUser, authLogin, getUserProfile, getAllUsers };