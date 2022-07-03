import { styled } from "../../assets/theme";

export const PlayButtonWrapper = styled("div")(({ theme }) => {
  return {
    ...theme.mixins.genericFlex,
    "& svg": {
      marginRight: 10,
    },
  };
});
