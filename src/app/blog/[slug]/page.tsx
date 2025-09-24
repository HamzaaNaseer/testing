import React from "react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const page = ({ params }) => {
  return <div className="text-orange-700 text-2xl bg-black">this is the {params?.slug}</div>;
};

export default page;
