import { FavoriteType } from "@/types";

const postFavorite = async (
  uid: string,
  tripid: string
): Promise<FavoriteType | undefined> => {
  const bodyData = {
    uid: uid,
    tripid: tripid.toString(),
  };
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_END_POINT}/${process.env.NEXT_PUBLIC_LOGIN_PATH}/${uid}/favorite`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify(bodyData),
    }
  );
  if (res.status === 401) {
    return undefined;
  }
  const data = await res.json();
  return data.favorite;
};

const getFavoriteByUidTripId = async (
  uid: string,
  tripid: string
): Promise<FavoriteType | undefined> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_END_POINT}/favorite/${uid}/${tripid}`
    );
    if (res.status === 404) {
      return undefined;
    }
    const data = await res.json();

    return data.favorite;
  } catch (err) {
    return undefined;
  }
};

const existFavoriteByUidTripId = async (
  uid: string,
  tripid: string
): Promise<boolean> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_END_POINT}/favorite/exist/${uid}/${tripid}`
  );
  if (res.status === 404) {
    return false;
  }
  const data = await res.json();

  return data.favorite;
};

const getFavoritesByUid = async (uid: string): Promise<FavoriteType[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_END_POINT}/favorite/uid/${uid}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }
  );
  const data = await res.json();

  return data.favorites;
};

const getFavoritesByTripID = async (
  tripid: string
): Promise<FavoriteType[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_END_POINT}/favorite/tripid/${tripid}`
  );
  if (res.status === 404) {
    return [];
  }
  const data = await res.json();

  return data.favorites;
};

const deleteFavoriteById = async (
  uid: string,
  favoriteid: string
): Promise<FavoriteType> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_END_POINT}/${process.env.NEXT_PUBLIC_LOGIN_PATH}/${uid}/favorite/${favoriteid}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }
  );
  const data = await res.json();
  return data.favorite;
};

export {
  postFavorite,
  getFavoritesByUid,
  deleteFavoriteById,
  getFavoritesByTripID,
  getFavoriteByUidTripId,
  existFavoriteByUidTripId,
};
