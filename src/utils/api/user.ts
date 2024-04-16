import { UserType } from "@/types";

const postUser = async (uid: string, name: string): Promise<UserType> => {
  const bodyData = {
    favoriteTrips: [],
    name: name,
  };

  const res = await fetch(`http://localhost:8080/login/api/v1/${uid}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify(bodyData),
  });

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
  const res = await fetch(`http://localhost:8080/login/api/v1/${uid}/user`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify(bodyData),
  });
  const data = await res.json();
  return data.user;
};

const deleteLoginUser = async (uid: string): Promise<UserType[]> => {
  const res = await fetch(`http://localhost:8080/login/api/v1/${uid}/user`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });
  const data = await res.json();
  return data.user;
};

const getUser = async (uid: string): Promise<UserType> => {
  const res = await fetch(`http://localhost:8080/user/${uid}`);
  const data = await res.json();
  return data.user;
};

const getUserIcon = async (uid: string): Promise<string> => {
  console.log("getUserIcon");
  const res = await fetch(`http://localhost:8080/usericon/${uid}`, {
    cache: "no-store",
  });
  const blob = await res.blob();
  const src = URL.createObjectURL(blob);
  return src;
};

const postUserIcon = async (usericon: File, uid: string) => {
  const formData = new FormData();
  formData.append("image", usericon, "image.png");
  const res = await fetch(
    `http://localhost:8080/login/api/v1/${uid}/usericon`,
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
  getUserIcon,
  postUserIcon,
};
