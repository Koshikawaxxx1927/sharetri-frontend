import { getPrefectureList } from "@/utils/api";
import { PostTrip, TripScroll } from "@/features";
import { Box, Grid } from "@mui/material";
import { ModalButton } from "@/components/elements";
import { TripProvider } from "@/context";

const TripList = async () => {
  const prefectures = await getPrefectureList();
  return (
    <Box>
      <TripScroll prefectures={prefectures} />
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
