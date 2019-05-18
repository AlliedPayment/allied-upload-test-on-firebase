import * as Cors from 'cors';
const cors = Cors({
  origin: true
});

import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    response.send('Hello from Firebase!');
  });
});

export const upload = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    response.send('success');
  });
});
