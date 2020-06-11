export const createEmptyAuth = (): Auth => {
  return {
    sub: null,
    isReady: false,
    hasAccess: false,
  };
};
