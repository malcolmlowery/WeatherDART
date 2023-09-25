import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails,
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

export const signIn = (email: string, password: string) => {
  return new Promise((resolve, reject) => {
    const authenicationDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    const cognitoUser = new CognitoUser({ Username: email, Pool: userPool });

    cognitoUser.authenticateUser(authenicationDetails, {
      onSuccess: (result) => {
        resolve(result);
      },
      onFailure: (err) => {
        reject(err);
      },
    });
  });
};

// export const forgotPassword = (email: string) => {};

// export const confirmPassword = (
//   email: string,
//   new_password: string,
//   code: string,
// ) => {};

export const signOut = () => {
  const cognitoUser = userPool.getCurrentUser();
  if (cognitoUser) {
    cognitoUser.signOut();
  }
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const cognitoUser = userPool.getCurrentUser();

    if (!cognitoUser) {
      reject(new Error('No user found'));
      return;
    }

    cognitoUser.getSession((err: Error) => {
      if (err) {
        reject(err);
        return;
      }

      cognitoUser.getSession((err: Error) => {
        if (err) {
          reject(err);
          return;
        }

        cognitoUser.getUserAttributes((err, attributes) => {
          if (err) {
            reject(err);
            return;
          }

          const userDetails = attributes?.reduce((acc, attribute) => {
            return { ...acc, [attribute.Name]: attribute.Value };
          }, {});

          resolve({ ...userDetails });
        });
      });
    });
  });
};

export const getSession = () => {
  const congnitoUser = userPool.getCurrentUser();
  return new Promise((resolve, reject) => {
    if (!congnitoUser) {
      reject(new Error('No user found'));
    } else {
      congnitoUser.getSession((err: Error, session: null) => {
        if (err) {
          reject(err);
          return;
        } else {
          resolve(session);
        }
      });
    }
  });
};
