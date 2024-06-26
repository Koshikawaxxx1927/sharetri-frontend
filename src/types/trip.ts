export default interface TripType {
  ID: string;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string;
  uid: string;
  prefectureid: string;
  Spots: string;
  title: string;
  startdate: string;
  enddate: string;
  memo: string;
  imagepath: string;
  favorite: number;
}
