// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBBl9hJdNdIaGZoNZr94-HoXFu-7Jw9N2E",
    authDomain: "ionfire-e1611.firebaseapp.com",
    databaseURL: "https://ionfire-e1611.firebaseio.com",
    projectId: "ionfire-e1611",
    storageBucket: "ionfire-e1611.appspot.com",
    messagingSenderId: "373711026517"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
