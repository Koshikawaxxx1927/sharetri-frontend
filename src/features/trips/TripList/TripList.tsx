import { getPrefectureList } from "@/utils/api";
import { PostTrip } from "@/features";
import { Box, Grid } from "@mui/material";
import { ModalButton } from "@/components/elements";

interface TripListProps {
  children: React.ReactNode;
}

const TripList = async ({ children }: TripListProps) => {
  const prefectures = await getPrefectureList();
  return (
    <Box>
      {children}
      <Box sx={{ margin: "20px" }}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <Grid item xs={12}>
            <ModalButton text={"旅行を追加"}>
              <PostTrip prefectures={prefectures} />
            </ModalButton>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default TripList;
