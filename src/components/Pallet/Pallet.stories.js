import Pallet from './Pallet';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
title: 'Stories/Pallet',
component: Pallet,
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

export const Pallet_Default = () => (
<Pallet />
);