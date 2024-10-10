"use client";
// pages/buttonPage.tsx
import React, { useState } from "react";
import { Button } from "primereact/button";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { InputSwitch } from "primereact/inputswitch";
import { RootState } from "../../store/store";
import RootLayout from "./layout";
import { toggleTheme } from "../../store/themeSlice";

const ButtonPage: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);

  return (
    <RootLayout>
      <div className={theme}>
        <InputSwitch
          checked={checked}
          onChange={(e) => {
            setChecked(e.value);
            dispatch(toggleTheme());
          }}
        />
      </div>
    </RootLayout>
  );
};

export default ButtonPage;
