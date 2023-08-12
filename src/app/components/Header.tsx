"use client";

import { useAppSelector } from "../redux/store";

function Header() {
    const headerBg = useAppSelector((state) => state.headerBg.value);

    const kawahraIcon = "images/kawahara.png";
    const header = {
        display: "flex",
        background: `url(${headerBg})`,
        boxShadow: "0 1px 8px rgba(0, 0, 0, 0.5)",
    };

  return (
    <>
        <header style={header}>
            <img src={kawahraIcon} alt="河原学園アイコン" width={50} height={50} />
            <h1>Order Screen</h1>
        </header>
    </>
  );
}

export default Header