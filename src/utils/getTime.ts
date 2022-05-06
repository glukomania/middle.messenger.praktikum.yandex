export const getTime = (time:string) => {
  return Intl.DateTimeFormat('ru', {hour: 'numeric', minute: 'numeric'}).format(Date.parse(time));
};
