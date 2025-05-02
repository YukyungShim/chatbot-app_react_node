require('dotenv').config();  // .env 파일을 불러오기

// 프로덕션 환경이 아닌 경우 .env 파일을 통해 환경 변수들을 가져옵니다.
module.exports = {
    googleProjectID: process.env.GOOGLE_PROJECT_ID,
    dialogFlowSessionID: process.env.DIALOGFLOW_SESSION_ID,
    dialogFlowSessionLanguageCode: process.env.DIALOGFLOW_SESSION_LANGUAGE_CODE,
    mongoURI: process.env.MONGO_URI,
    openAI_API_Key: process.env.OPENAI_API_KEY,
};



// if (process.env.NODE_ENV === 'production'){
//     module.exports = require('./prod');
// }else{
//     module.exports = require('./dev');
// }