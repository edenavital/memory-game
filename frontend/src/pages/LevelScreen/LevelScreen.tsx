import { FC } from "react";
import { Wrapper } from "../../components/Wrapper";
import { Typography } from "../../components/Typography";
import { Button } from "../../components/Button";
import { globalLevel } from "../../redux/features/global";
import { useAppDispatch } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../consts";
import { Level } from "../../redux/features/global.types";

export const LevelScreen: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onClickLevel = (level: Level) => {
    dispatch(globalLevel(level));
    navigate(ROUTES.GAME);
  };

  return (
    <Wrapper withHeader>
      <Typography>Choose level :</Typography>
      <Button onClick={() => onClickLevel(Level.EASY)}>Easy</Button>
      <Button onClick={() => onClickLevel(Level.MEDIUM)}>Medium</Button>
      <Button onClick={() => onClickLevel(Level.HARD)}>Hard</Button>
    </Wrapper>
  );
};
