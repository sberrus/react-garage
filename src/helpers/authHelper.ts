/// Mock Async Login API call.
// TODO: Replace with your actual login API Call code
const fakeAsyncLogin = async (): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Logged In");
    }, 300);
  });
};

// Mock Async Logout API call.
// TODO: Replace with your actual logout API Call code
const fakeAsyncLogout = async (): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("The user has successfully logged on the server");
    }, 300);
  });
};

export {
  fakeAsyncLogin,
  fakeAsyncLogout
}
