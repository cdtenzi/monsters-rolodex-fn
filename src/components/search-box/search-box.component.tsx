import React from "react";
import "./search-box.styles.css";
import { ChangeEvent } from "react";

type SearchBoxProps = {
  classname?: string;
  placeHolder: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const SearchBox = ({ placeHolder, onChangeHandler }: SearchBoxProps) => (
  <input
    className="search"
    type="search"
    placeholder={placeHolder}
    onChange={onChangeHandler}
  />
);
