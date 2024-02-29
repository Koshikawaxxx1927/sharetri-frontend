import AccordionText from "@/components/elements/AccordionText";
import { Prefecture, Trip } from "@/types";
import Image from "next/image";

interface TripProps {
  trip: Trip;
  prefecture: Prefecture;
}
interface PrefectureProps {}

const Trip = ({ trip, prefecture }: TripProps) => {
  return (
    <div className="w-full p-3 bg-slate-50 py-3 hover:bg-white cursor-pointer rounded md:w-5/12 my-3">
      <li key={trip.ID} className="px-3">
        <div className="bg-slate-200">
          <Image
            src="/images/noimage.png"
            height={100}
            width={100}
            alt="画像がアップロードされていません"
            className="mx-auto"
          />
        </div>
        <h2 className="text-center my-1">{trip.title}</h2>
        <div className="text-slate-400 text-xs">
          {trip.startdate.split("T")[0]}~{trip.enddate.split("T")[0]}
        </div>
        <div className="my-2">
          <span>
            <Image
              src="/images/prefecturespot.png"
              height={15}
              width={15}
              alt="県"
              className="inline"
            />
          </span>
          {prefecture.name}
        </div>
        <AccordionText text={trip.memo} />
      </li>
    </div>
  );
};

export default Trip;
