// Wait certain times before doing something
export const wait = (ms: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};
