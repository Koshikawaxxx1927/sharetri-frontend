import { FavoriteType } from "@/types";

const postFavorite = async (
  uid: string,
  tripid: string
): Promise<FavoriteType> => {
  const bodyData = {
    uid: uid,
    tripid: tripid.toString(),
  };
  const res = await fetch(
    `http://localhost:8080/login/api/v1/${uid}/favorite`,
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

  return data.faovorite;
};

const getFavoriteByUidTripId = async (
  uid: string,
  tripid: string
): Promise<FavoriteType> => {
  const res = await fetch(`http://localhost:8080/favorite/${uid}/${tripid}`);
  // if (res.status === 404) {
  //   return null;
  // }
  const data = await res.json();

  return data.favorite;
};

const getFavoritesByUid = async (uid: string): Promise<FavoriteType[]> => {
  const res = await fetch(`http://localhost:8080/favorite/uid/${uid}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });
  const data = await res.json();

  return data.favorites;
};

const getFavoritesByTripID = async (
  tripid: string
): Promise<FavoriteType[]> => {
  const res = await fetch(`http://localhost:8080/favorite/tripid/${tripid}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });
  const data = await res.json();

  return data.favorites;
};

const deleteFavoriteById = async (
  uid: string,
  favoriteid: string
): Promise<FavoriteType> => {
  const res = await fetch(
    `http://localhost:8080/login/api/v1/${uid}/favorite/${favoriteid}`,
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
};
