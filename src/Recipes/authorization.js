export const authorization = {
  isAuthorized: localStorage.getItem('user'),
  authorize(func) {
    this.isAuthorized = true;
    func();
  },
};
