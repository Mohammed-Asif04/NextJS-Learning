import React from "react";
import onePiece from "public/one-piece.jpg";
import Image from "next/image";

const HeroPage = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 -z-10">
        <Image
          src={onePiece}
          fill
          alt="One-Pice"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex items-center justify-center pt-5">
        <h1 className="font-bold text-4xl text-black">One Piece</h1>
      </div>
    </div>
  );
};

export default HeroPage;
