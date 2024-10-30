const jwt = require('jsonwebtoken');
const User = require("../models/User");
const bcrypt = require('bcrypt');



const register1= async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const login1= async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token, id: user._id, name: user.name, email: user.email });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const  Currentuser= async (req, res) => {


};

const updateUser = async (req, res) => {
    
};

const deleteUser = async (req, res) => {
   
};

module.exports = { register1, login1,  Currentuser, updateUser, deleteUser };
