export const ErrorHandler = (response) => {
  if (!response) return;
  const {
    response: { status },
  } = response;

  const ErrorList = {
    400: 'Either UserName or Password is Empty',
    401: 'Either UserName or Password is Not Valid',
    409: 'Already Username Taken',
  };

  return ErrorList[status] || 'Registration Failed';
};
