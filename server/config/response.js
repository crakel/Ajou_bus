const basicResponse = ({isSuccess, code, message}) => {
    return {
        isSuccess: isSuccess,
        code: code,
        message: message
    }
};

const resultResponse = ({isSuccess, code, message}, result) => {
    return {
        isSuccess: isSuccess,
        code: code,
        message: message,
        result: result
    }
};
module.exports = {
    basicResponse,
    resultResponse,
    SUCCESS: { isSuccess:true, code: 200, message: "성공"},
    loginSUCCESS: { isSuccess:true, code: 200, message: "로그인 성공"},
    DB_ERROR: { isSuccess: false, code: 500, message: "데이터 베이스 에러"},
    USER_PARAMS_EMPTY: { isSuccess:false, code:400, message:"유저 데이터 누락"},
    USER_EXISTS: {isSuccess:false, code:400, message:"유저가 이미 존재합니다."},
    FAIL: { isSuccess: false, code: 400, message:"실패" },
    USER_DUP: {isSuccess: false, code: 400, message: "중복된 회원입니다."},
    NOT_AJOU_EMAIL : {isSuccess: false, code: 400, message: "아주대 이메일 형식이 아닙니다."},
    SIGNUPSUCCESS : {isSuccess: true, code: 200, message:"회원가입이 완료되었습니다."},
    EMAIL_SUCCESS: {isSuccess: true, code: 200, message: "인증번호를 해당메일로 전송하였습니다."},
    AJOU_STUDENT: {isSuccess: true, code: 200, message: "아주대학생 인증이 완료되었습니다."},
    FALSE_TOKEN : {isSuccess: false, code: 400, message: "인증번호 오류입니다."},
};