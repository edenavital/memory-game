import { url } from "inspector";
import { styled } from "../../assets/theme";
import img from "../../assets/icons/background-lobby.png";

export const LayoutWrapper = styled("div")({
  width: "100vw",
  height: "100vh",
  backgroundImage: `url(${img})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
});
