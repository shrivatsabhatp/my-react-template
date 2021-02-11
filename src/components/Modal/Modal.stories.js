import Modal from './Modal';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
title: 'Stories/Modal',
component: Modal,
parameters: {
backgrounds: {
default: "light",
values: [
{ name: "light", value: "#F8F8F8" },
{ name: "dark", value: "#333333" },
],
},
},
};

export const Modal_Default = () => (
<Modal />
);