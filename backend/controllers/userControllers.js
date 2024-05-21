import expressAsyncHandler from "express-async-handler";

// desc   Auth user/set token 
// route  POST /api/users/auth 
// access PUBLIC
const authUser = expressAsyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Authentication successful' });
})

// desc   Register user/regsiter new user 
// route  POST /api/users/register
// access PUBLIC
const registerUser = expressAsyncHandler(async (req, res) => {
    res.status(201).json({ message: 'Registration Successful' });
})

// desc   Logout user/logout user 
// route  POST /api/users/logout
// access PUBLIC
const logoutUser = expressAsyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Logout Successful' });
})

// desc   Get user/profile 
// route  GET /api/users/profile
// access PRIVATE
const getUserProfile = expressAsyncHandler(async (req, res) => {
    res.status(200).json({ message: 'User Profile' });
})

// desc   Update user/profile 
// route  PUT /api/users/profile 
// access PRIVATE
const updateUserProfile = expressAsyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Update Successful' });
})

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
}