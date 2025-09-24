import React from "react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const page = ({ params }) => {
  return <div>this is the {params?.slug}</div>;
};

export default page;
