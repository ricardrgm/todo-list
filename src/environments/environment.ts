// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_url:"http://localhost:3000/todo/",
  firebaseConfig : {
    apiKey: "AIzaSyB4qKpuIPo2073kCw5dmtl_liTdbGLRw9I",
    authDomain: "todo-list-rgmirayo.firebaseapp.com",
    projectId: "todo-list-rgmirayo",
    storageBucket: "todo-list-rgmirayo.appspot.com",
    messagingSenderId: "667949862586",
    appId: "1:667949862586:web:a48191005c266059463c83"
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
