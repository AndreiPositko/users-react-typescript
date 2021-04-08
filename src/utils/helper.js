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

export const transformPostData = (originalPost, editData) => {
  const { ...rest } = editData;

  const result = {
    ...originalPost,
    ...rest,
  };

  return result;
};

export const transformPhotoData = (originalPhoto, editData) => {
  const { ...rest } = editData;

  const result = {
    ...originalPhoto,
    ...rest,
  };

  return result;
};
