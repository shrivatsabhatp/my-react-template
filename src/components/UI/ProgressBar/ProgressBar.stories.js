import ProgressBar from './ProgressBar';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
title: 'Stories/ProgressBar',
component: ProgressBar,
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

export const ProgressBar_Default = () => (
<ProgressBar />
);