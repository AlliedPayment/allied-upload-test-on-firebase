import * as Cors from 'cors';
const cors = Cors({
  origin: true
});

import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const testWithCors = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    response.send('success with cors');
  });
});

export const testWithoutCors = functions.https.onRequest(
  (request, response) => {
    response.send('success without cors');
  }
);
