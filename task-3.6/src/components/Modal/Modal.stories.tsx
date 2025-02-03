import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Modal from "./Modal";
import styles from "./Modul.module.scss"

export default {
  title: "Modal",
  component: Modal,
} as Meta;

const Template: StoryFn = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className={styles.modal_title} onClick={() => setIsOpen(true)}>Нажимай и получишь Пивко</button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Пивко закончилось</h2>
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
