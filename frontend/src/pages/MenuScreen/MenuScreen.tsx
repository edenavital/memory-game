import { FC } from "react";
import { IMenuScreen } from "./MenuScreen.types";
import * as Styled from "./MenuScreen.styles";
import { Wrapper } from "../../components/Wrapper";
import { Typography } from "../../components/Typography";

import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { ReactComponent as PlayBtn } from "../../assets/icons/play-icon.svg";
import { ROUTES } from "../../consts";

export const MenuScreen: FC<IMenuScreen> = () => {
  const navigate = useNavigate();

  const onClickOption = (page: ROUTES) => {
    navigate(page);
  };

  return (
    <Wrapper withHeader>
      <Button>
        <Styled.PlayButtonWrapper onClick={() => onClickOption(ROUTES.LEVEL)}>
          <PlayBtn />
          <Typography>Play</Typography>
        </Styled.PlayButtonWrapper>
      </Button>
      <Button>Leaderboard</Button>
      <Button>About</Button>
    </Wrapper>
  );
};
