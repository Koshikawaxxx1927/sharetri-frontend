import { UserType } from "@/types";

const postUser = async (uid: string, name: string): Promise<UserType> => {
  const bodyData = {
    favoriteTrips: [],
    name: name,
  };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_END_POINT}/${process.env.NEXT_PUBLIC_LOGIN_PATH}/${uid}/user`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify(bodyData),
    }
  );

  const data = await res.json();

  return data.user;
};

const putUser = async (
  uid: string,
  favoriteTrips: string[],
  name: string
): Promise<UserType> => {
  const bodyData = {
    uid: uid,
    favoriteTrips: favoriteTrips,
    name: name,
  };
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_END_POINT}/${process.env.NEXT_PUBLIC_LOGIN_PATH}/${uid}/user`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify(bodyData),
    }
  );
  const data = await res.json();
  return data.user;
};

const deleteLoginUser = async (uid: string): Promise<UserType[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_END_POINT}/${process.env.NEXT_PUBLIC_LOGIN_PATH}/${uid}/user`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }
  );
  const data = await res.json();
  return data.user;
};

const getUser = async (uid: string): Promise<UserType | undefined> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_END_POINT}/user/${uid}`);
  if (res.status === 404) {
    return undefined;
  }
  const data = await res.json();
  return data.user;
};

const existUser = async (uid: string): Promise<boolean> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_END_POINT}/user/exist/${uid}`
  );
  if (res.status === 404) {
    return false;
  }
  const data = await res.json();
  return data.user;
};

const getUserIcon = async (uid: string): Promise<string> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_END_POINT}/usericon/${uid}`,
    {
      cache: "no-store",
    }
  );
  if (res.status === 404) {
    return "";
  }
  const blob = await res.blob();
  const src = URL.createObjectURL(blob);
  return src;
};

const postUserIcon = async (usericon: File, uid: string) => {
  const formData = new FormData();
  formData.append("image", usericon, "image.png");
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_END_POINT}/${process.env.NEXT_PUBLIC_LOGIN_PATH}/${uid}/usericon`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: formData,
    }
  );
  const data = await res.json();
  return data.user;
};

export {
  postUser,
  putUser,
  deleteLoginUser,
  getUser,
  existUser,
  getUserIcon,
  postUserIcon,
};
