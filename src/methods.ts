export const getMethod = async url => {
  return await fetch(url).then(r => r.json());
};
