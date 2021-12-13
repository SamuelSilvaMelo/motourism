module.exports = (email, password) => {
  const emailIsValid = /^[a-z0-9.]+@[a-z]+\.[a-z]/i;
  if (!email) return { status: 401, message: 'All fields must be filled' };
  if (!password) return { status: 401, message: 'All fields must be filled' };
  if (!emailIsValid.test(email)) return { status: 401, message: 'Incorrect username or password' };
  return null;
};

// fonte regex: https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
// e adaptado por mim no https://regexr.com/