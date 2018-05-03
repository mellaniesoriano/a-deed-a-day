// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import { FIREBASE_CONFIG } from '../config/firebase.config';

export const environment = {
  production: false,
  firebase: {
    apiKey: FIREBASE_CONFIG.API_KEY,
    authDomain: FIREBASE_CONFIG.AUTH_DOMAIN,
    databaseURL: FIREBASE_CONFIG.AUTH_DOMAIN,
    projectId: FIREBASE_CONFIG.PROJECT_ID,
    storageBucket: FIREBASE_CONFIG.STORAGE_BUCKET,
    messagingSenderId: FIREBASE_CONFIG.MSG_SENDER_ID
  }
};
