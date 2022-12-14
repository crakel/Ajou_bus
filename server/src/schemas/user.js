const mongoose = require("mongoose");

//학번, 이메일, 닉네임, 비밀번호,
const userSchema = new mongoose.Schema({
    studentID: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    level: { // 유저 권한 관리
        type: Number,
        required: true
    },
    sessionid: {
        type: String,
        required: false
    }
},{timestamps: true}); //createdAt, updatedAt 생성

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;