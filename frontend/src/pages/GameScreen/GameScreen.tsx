import { FC } from "react";
import * as Styled from "./GameScreen.styles";
import { Wrapper } from "../../components/Wrapper";
import { Typography } from "../../components/Typography";
import { Button } from "../../components/Button";
import { useAppDispatch } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/Card";

export const GameScreen: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <Wrapper withHeader>
      <Styled.Header>
        <Styled.LeftSideWrapper>
          <Styled.LeftSideText>
            <Typography>Score: BLA</Typography>
            <Typography>Time: BLA</Typography>
            <Typography>Moves: BLA</Typography>
          </Styled.LeftSideText>
          <div>
            <Button>bla</Button>
          </div>
        </Styled.LeftSideWrapper>
      </Styled.Header>

      <Styled.GameContentWrapper>
        <Card></Card>
      </Styled.GameContentWrapper>
    </Wrapper>
  );
};
