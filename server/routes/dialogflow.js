const express = require('express');
const router = express.Router();
const { OpenAI } = require('openai');
require('dotenv').config();  // .env 파일을 불러오기

// OpenAI 인스턴스 생성 (API 키 환경 변수 사용)
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,  // .env 파일에서 OpenAI API 키 가져오기
});

// 텍스트 쿼리 처리
router.post('/textQuery', async (req, res) => {
    try {
        const userMessage = req.body.text; // 클라이언트에서 받은 텍스트

        // OpenAI API로 요청을 보내고 응답 받기
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo', // 사용할 모델 선택 (예: gpt-3.5-turbo)
            messages: [{ role: 'user', content: userMessage }],
        });

        // 응답 처리
        console.log('Detected intent');
        console.log(`  Query: ${userMessage}`);
        console.log(`  Response: ${response.choices[0].message.content}`);

        res.send({ reply: response.choices[0].message.content });  // OpenAI 응답 반환
    } catch (error) {
        console.error('Error during OpenAI request:', error);
        res.status(500).send('Internal Server Error');
    }
});

// 이벤트 쿼리 처리
router.post('/eventQuery', async (req, res) => {
    try {
        const eventName = req.body.event; // 클라이언트에서 받은 이벤트 이름

        // OpenAI API로 요청을 보내고 응답 받기
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo', // 사용할 모델 선택 (예: gpt-3.5-turbo)
            messages: [{ role: 'user', content: `Event: ${eventName}` }],
        });

        // 응답 처리
        console.log('Detected event');
        console.log(`  Event: ${eventName}`);
        console.log(`  Response: ${response.choices[0].message.content}`);

        res.send({ reply: response.choices[0].message.content });  // OpenAI 응답 반환
    } catch (error) {
        console.error('Error during OpenAI request:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;




// const express = require('express');
// const router = express.Router();
// const { OpenAI } = require('openai');
// require('dotenv').config();  // .env 파일을 불러오기

// // OpenAI 인스턴스 생성 (API 키 환경 변수 사용)
// const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY,  // .env 파일에서 OpenAI API 키 가져오기
// });

// // 텍스트 쿼리 처리
// router.post('/textQuery', async (req, res) => {
//     try {
//         const userMessage = req.body.text; // 클라이언트에서 받은 텍스트

//         // OpenAI API로 요청을 보내고 응답 받기
//         const response = await openai.chat.completions.create({
//             model: 'gpt-3.5-turbo', // 사용할 모델 선택 (예: gpt-3.5-turbo)
//             messages: [{ role: 'user', content: userMessage }],
//         });

//         // 응답 처리
//         console.log('Detected intent');
//         console.log(`  Query: ${userMessage}`);
//         console.log(`  Response: ${response.choices[0].message.content}`);

//         res.send({ reply: response.choices[0].message.content });  // OpenAI 응답 반환
//     } catch (error) {
//         console.error('Error during OpenAI request:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });

// // 이벤트 쿼리 처리
// router.post('/eventQuery', async (req, res) => {
//     try {
//         const eventName = req.body.event; // 클라이언트에서 받은 이벤트 이름

//         // OpenAI API로 요청을 보내고 응답 받기
//         const response = await openai.chat.completions.create({
//             model: 'gpt-3.5-turbo', // 사용할 모델 선택 (예: gpt-3.5-turbo)
//             messages: [{ role: 'user', content: `Event: ${eventName}` }],
//         });

//         // 응답 처리
//         console.log('Detected event');
//         console.log(`  Event: ${eventName}`);
//         console.log(`  Response: ${response.choices[0].message.content}`);

//         res.send({ reply: response.choices[0].message.content });  // OpenAI 응답 반환
//     } catch (error) {
//         console.error('Error during OpenAI request:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });

// module.exports = router;



// // const express = require('express');
// // const router = express.Router();
// // const { OpenAI } = require('openai');
// // const config = require('../config/keys');

// // const openai = new OpenAI({
// //   apiKey: config.openAI_API_Key,  // 환경 변수에서 API 키 불러오기
// // });

// // // 텍스트 쿼리 처리
// // router.post('/textQuery', async (req, res) => {
// //     try {
// //         const userMessage = req.body.text; // 클라이언트에서 받은 텍스트

// //         // OpenAI API로 요청을 보내고 응답 받기
// //         const response = await openai.chat.completions.create({
// //             model: 'gpt-3.5-turbo', // 사용할 모델 선택 (예: gpt-3.5-turbo)
// //             messages: [{ role: 'user', content: userMessage }],
// //         });

// //         // 응답 처리
// //         console.log('Detected intent');
// //         console.log(`  Query: ${userMessage}`);
// //         console.log(`  Response: ${response.choices[0].message.content}`);

// //         res.send({ reply: response.choices[0].message.content });  // OpenAI 응답 반환
// //     } catch (error) {
// //         console.error('Error during OpenAI request:', error);
// //         res.status(500).send('Internal Server Error');
// //     }
// // });

// // // 이벤트 쿼리 처리
// // router.post('/eventQuery', async (req, res) => {
// //     try {
// //         const eventName = req.body.event; // 클라이언트에서 받은 이벤트 이름

// //         // OpenAI API로 요청을 보내고 응답 받기
// //         const response = await openai.chat.completions.create({
// //             model: 'gpt-3.5-turbo', // 사용할 모델 선택 (예: gpt-3.5-turbo)
// //             messages: [{ role: 'user', content: `Event: ${eventName}` }],
// //         });

// //         // 응답 처리
// //         console.log('Detected event');
// //         console.log(`  Event: ${eventName}`);
// //         console.log(`  Response: ${response.choices[0].message.content}`);

// //         res.send({ reply: response.choices[0].message.content });  // OpenAI 응답 반환
// //     } catch (error) {
// //         console.error('Error during OpenAI request:', error);
// //         res.status(500).send('Internal Server Error');
// //     }
// // });

// // module.exports = router;



// // // const express = require('express');
// // // const router = express.Router();
// // // const structjson = require('./structjson.js');
// // // const dialogflow = require('dialogflow');
// // // const uuid = require('uuid');

// // // const config = require('../config/keys');

// // // const projectId = config.googleProjectID
// // // const sessionId = config.dialogFlowSessionID
// // // const languageCode = config.dialogFlowSessionLanguageCode


// // // // Create a new session
// // // const sessionClient = new dialogflow.SessionsClient();
// // // const sessionPath = sessionClient.sessionPath(projectId, sessionId);

// // // // We will make two routes 


// // // // Text Query Route

// // // router.post('/textQuery', async (req, res) => {
// // //     //We need to send some information that comes from the client to Dialogflow API 
// // //     // The text query request.
// // //     const request = {
// // //         session: sessionPath,
// // //         queryInput: {
// // //             text: {
// // //                 // The query to send to the dialogflow agent
// // //                 text: req.body.text,
// // //                 // The language used by the client (en-US)
// // //                 languageCode: languageCode,
// // //             },
// // //         },
// // //     };

// // //     // Send request and log result
// // //     const responses = await sessionClient.detectIntent(request);
// // //     console.log('Detected intent');
// // //     const result = responses[0].queryResult;
// // //     console.log(`  Query: ${result.queryText}`);
// // //     console.log(`  Response: ${result.fulfillmentText}`);

// // //     res.send(result)
// // // })



// // // //Event Query Route

// // // router.post('/eventQuery', async (req, res) => {
// // //     //We need to send some information that comes from the client to Dialogflow API 
// // //     // The text query request.
// // //     const request = {
// // //         session: sessionPath,
// // //         queryInput: {
// // //             event: {
// // //                 // The query to send to the dialogflow agent
// // //                 name: req.body.event,
// // //                 // The language used by the client (en-US)
// // //                 languageCode: languageCode,
// // //             },
// // //         },
// // //     };

// // //     // Send request and log result
// // //     const responses = await sessionClient.detectIntent(request);
// // //     console.log('Detected intent');
// // //     const result = responses[0].queryResult;
// // //     console.log(`  Query: ${result.queryText}`);
// // //     console.log(`  Response: ${result.fulfillmentText}`);

// // //     res.send(result)
// // // })







// // // module.exports = router;
