import {
  CognitoUserPool,
  CognitoUser,
  //   AuthenticationDetails,
} from 'amazon-cognito-identity-js';

const userPool = new CognitoUserPool({
  UserPoolId: import.meta.env.VITE_AWS_USER_POOL_ID,
  ClientId: import.meta.env.VITE_AWS_USER_POOL_CLIENT_ID,
});

export const signUp = (email: string, password: string) => {
  return new Promise((resolve, reject) => {
    userPool.signUp(email, password, [], [], (err, result) => {
      if (err) {
        reject(err);
        return;
      } else {
        console.log(result?.user);
        resolve(result?.user);
      }
    });
  });
};

export const confirmSignUp = (email: string, code: string) => {
  return new Promise((resolve, reject) => {
    const cognitoUser = new CognitoUser({
      Username: email,
      Pool: userPool,
    });

    cognitoUser.confirmRegistration(code, true, (err, result) => {
      if (err) {
        reject(err);
        return;
      } else {
        resolve(result);
      }
    });
  });
};

// export const signIn = (email: string, password: string) => {};

// export const forgotPassword = (email: string) => {};

// export const confirmPassword = (
//   email: string,
//   new_password: string,
//   code: string,
// ) => {};

// export const signout = () => {};

// export const getCurrentUser = () => {};

// export const getSession = () => {};
