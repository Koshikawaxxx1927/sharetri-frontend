import { getPrefectureList } from "@/utils/api";
import { TripScroll } from "@/features";

const TripList = async () => {
  const prefectures = await getPrefectureList();
  return (
    <>
      <TripScroll prefectures={prefectures} />
    </>
  );
};

export default TripList;
