export const transformUserData = (originalUser, editData) => {
  const { city, street, ...rest } = editData;
  const result = {
    ...originalUser,
    ...rest,
  };

  result.address.city = city;
  result.street = street;

  return result;
};
