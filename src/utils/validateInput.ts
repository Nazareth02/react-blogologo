const validateEmail = () => {
  return {
    required: "Email is required",
    maxLength: { value: 30, message: "*max characters: 30" },
    pattern: { value: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message: "Enter a valid email" },
  };
};

const validateName = () => {
  return {
    required: "Name is required",
    maxLength: { value: 20, message: "Too many symbols" },
    pattern: {
      value: /^[A-Za-z]+$/,
      message: "Only letters required",
    },
  };
};

const validatePassword = () => {
  return {
    required: "Password is required",
    maxLength: { value: 30, message: "*max characters: 30" },
    minLength: {
      value: 6,
      message: "*min characters: 6",
    },
  };
};

export { validateEmail, validateName, validatePassword };
