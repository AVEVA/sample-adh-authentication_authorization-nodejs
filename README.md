# Authorization Code Flow + PKCE JavaScript Sample and Test

**Version:** 1.2.9
[![Build Status](https://dev.azure.com/AVEVA-VSTS/Cloud%20Platform/_apis/build/status%2Fproduct-readiness%2FADH%2FAVEVA.sample-adh-authentication_authorization-nodejs?repoName=AVEVA%2Fsample-adh-authentication_authorization-nodejs&branchName=main)](https://dev.azure.com/AVEVA-VSTS/Cloud%20Platform/_build/latest?definitionId=16135&repoName=AVEVA%2Fsample-adh-authentication_authorization-nodejs&branchName=main)

This client uses the OAuth2/OIDC Authorization Code Flow + PKCE to obtain an access token. See the main Cds Authentication samples page [README](https://github.com/AVEVA/AVEVA-Samples-CloudOperations/blob/main/docs/AUTHENTICATION.md) for more information about this flow.

## Requirements

- Node.js 12.6.0+
- Web Browser with Javascript enabled
  - You will need Google Chrome if you want to run the automated test

## Running the sample client

### Prerequisites

- Register an AuthorizationCode client in Cds and ensure that the registered client in Cds contains `http://localhost:5004/callback.html`, and `http://localhost:5004/silent-refresh.html` in the list of RedirectUris.
- Configure the sample using the file [appsettings.placeholder.json](src/appsettings.placeholder.json). Before editing, rename this file to `appsettings.json`. This repository's `.gitignore` rules should prevent the file from ever being checked in to any fork or branch, to ensure credentials are not compromised.
- Replace the placeholders in the `appsettings.json` file with your TenantID and ClientID obtained from registration. The username and password fields are used for testing and can be left as is.

You can learn more about the config options [here](https://github.com/IdentityModel/oidc-client-js/wiki#other-optional-settings).

### Running the Sample from the Command Line

1. Make sure Node.js is installed, installation instructions are available at [node.js](https://nodejs.org/en/)
2. Clone the git repository
3. Install dependencies, using the command line:

   ```shell
   npm ci
   ```

4. Start the http server to host the sample, using:

   ```shell
   npm start
   ```

5. Open a browser and navigate to `http://localhost:5004`
6. Click on `Login` and follow the prompts to log in to Cds

## Running the automated test

### Test Prerequisites

1. Make sure the sample client in the section above is running.
1. Make sure Google Chrome is installed on your test system.
1. Make sure the version of Chrome matches the version defined for the `chromedriver` dependency in [package.json](package.json).
   - If the dependency needs to be updated in `package.json`, after saving, run `npm i` in a command prompt inside this folder to update the package.
1. Update the `appsettings.json` file with the username and password for the Microsoft account that will be used to log in. The test is only written to work with a personal Microsoft account and must only prompt for only username followed by password (no Two-Factor authentication or other consent or informational prompts). Also if the location of the sample application has been modified then change the url location.

### Running the test from the Command Line

Run the command:

```shell
npm test
```

---

For the main Cds Authentication samples page [ReadMe](https://github.com/AVEVA/AVEVA-Samples-CloudOperations/blob/main/docs/AUTHENTICATION.md)  
For the main Cds samples page [ReadMe](https://github.com/AVEVA/AVEVA-Samples-CloudOperations)  
For the main AVEVA samples page [ReadMe](https://github.com/AVEVA/AVEVA-Samples)
