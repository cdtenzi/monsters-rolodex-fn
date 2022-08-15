import React from "react";
import "./card-list.styles.css";
import { Card } from "../card/card.component";
import { Monster } from "../../App";

type CardListProps = {
  monsters: Monster[];
};

export const CardList = (props: CardListProps) => {
  console.log(props);
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
