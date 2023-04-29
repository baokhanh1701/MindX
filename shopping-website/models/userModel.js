//khai báo cấu trúc bảng User
//Thực hiện công việc mã hóa password tại đây
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
});

userSchema.pre('save', async function(next) {
    //encrypted whenever before save info into database
    //if không sửa thông tin trường password -> đi tiếp
    if (!this.isModified('password')) return next();
    
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        return next();
    } catch (e) {
        return next(e);
    }
})

const User = mongoose.model('User', userSchema);
module.exports = User;