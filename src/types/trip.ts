export default interface TripType {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string;
  userid: string;
  prefectureid: string;
  Spots: string;
  title: string;
  startdate: string;
  enddate: string;
  memo: string;
  imagepath: string;
  ispublic: boolean;
  favorite: number;
}
