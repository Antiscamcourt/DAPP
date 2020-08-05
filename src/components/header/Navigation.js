import React from "react";
import Header from "./Header";
import RightDrawer from "./RighDrawer";

const Navigation = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <Header onMenuClickHandler={() => openDrawer()} />
      <RightDrawer open={drawerOpen} onClickHandler={() => closeDrawer()} />
    </>
  );
};

export default Navigation;
 