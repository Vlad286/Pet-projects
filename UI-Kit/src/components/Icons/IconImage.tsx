import React from "react";

interface IconImageProps {
  src: string;
  alt: string;
  onClick?: () => void;
}

const IconImage: React.FC<IconImageProps> = ({ src, alt }) => {
  return <div><img style={{width: "22px", height: "22px"}} src={src} alt={alt} /></div>;
};

export default IconImage;
