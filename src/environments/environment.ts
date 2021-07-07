// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_url:"http://localhost:3000/todo/",
  firebaseConfig:{
    apiKey: "AIzaSyAi1tFwok5ZxwSPRtGA1l20w7cC3tgZeTI",
    authDomain: "todo-rgl.firebaseapp.com",
    projectId: "todo-rgl",
    storageBucket: "todo-rgl.appspot.com",
    messagingSenderId: "335982331063",
    appId: "1:335982331063:web:5d48bcedae16fcf7e1b932"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
