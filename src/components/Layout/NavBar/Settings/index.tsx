import { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import NavbarButton from "../NavbarItem/NavbarButton";
import { FaPaintBrush } from "react-icons/fa";
import Modal from "./Modal";

export default function index() {
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [root, setRoot] = useState<HTMLElement | null>(null);

  const openSettings = () => {
    setShowSettings(true);
  };
  const closeSettings = () => {
    setShowSettings(false);
  };

  useEffect(() => {
    setRoot(document.getElementById("root"));
  }, []);

  return (
    <Fragment>
      <NavbarButton onClick={openSettings}>
        <FaPaintBrush size={"2.5rem"} />
      </NavbarButton>
      {root !== null &&
        ReactDOM.createPortal(
          <Modal onClose={closeSettings} isModalVisible={showSettings} />,
          root
        )}
    </Fragment>
  );
}
