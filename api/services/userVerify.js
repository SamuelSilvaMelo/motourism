module.exports = (name, email, password) => {
  const emailIsValid = /\S+@\S+\.\S+/;
  const message = 'Invalid entries. Try again.';
  if (!name) return { status: 400, message };
  if (!email) return { status: 400, message };
  if (!password) return { status: 400, message };
  if (!emailIsValid.test(email)) return { status: 400, message };
  return null;
};

// fonte regex: https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
// e adaptado por mim no https://regexr.com/
