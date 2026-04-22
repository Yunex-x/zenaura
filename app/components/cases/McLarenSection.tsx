"use client";

import Image from "next/image";
import { JSX, useMemo, useState } from "react";
import { motion } from "framer-motion";

type ProductColor = {
  id: string;
  label: string;
  hex: string;
  swatchClass: string;
};

type ProductHeroProps = {
  onAddToCart: (item: {
    productId: string;
    title: string;
    price: number;
    quantity: number;
    image: string;
    colorLabel: string;
    colorHex: string;
  }) => void;
};

const colors: ProductColor[] = [
  {
    id: "green",
    label: "Green",
    hex: "#418173",
    swatchClass:
      "bg-[linear-gradient(180deg,#1F3F39_0%,#418173_20%,#6AA79A_35.62%,#2E5F56_50%,#79BDB0_66.14%,#418173_85%,#1F3F39_100%)]",
  },
  {
    id: "black",
    label: "Black",
    hex: "#111111",
    swatchClass:
      "bg-[linear-gradient(180deg,#000000_0%,#1A1A1A_24.56%,#3A3A3A_42.85%,#111111_58.01%,#4A4A4A_80.09%,#000000_100%)]",
  },
  {
    id: "gold",
    label: "Gold",
    hex: "#C7BE76",
    swatchClass:
      "bg-[linear-gradient(180deg,#5E582A_0%,#9F964E_13.09%,#C7BE76_28.16%,#F1E7A3_41.34%,#B3AB63_53.58%,#C7BE76_68.17%,#4F4A22_100%)]",
  },
  {
    id: "silver",
    label: "Silver",
    hex: "#B3B3B3",
    swatchClass:
      "bg-[linear-gradient(180deg,#4D4D4D_0%,#8C8C8C_20%,#B3B3B3_35%,#F2F2F2_50%,#9E9E9E_63.95%,#B3B3B3_80%,#3A3A3A_100%)]",
  },
];

function QuantitySelector({
  quantity,
  onDecrease,
  onIncrease,
  className = "",
}: {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
  className?: string;
}): JSX.Element {
  return (
    <div
      className={`flex items-center justify-center rounded-[31px] border border-white ${className}`}
    >
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onDecrease}
          aria-label="Decrease quantity"
          className="text-[12px] font-semibold text-white"
        >
          −
        </button>

        <span className="text-[12px] font-semibold text-white">{quantity}</span>

        <button
          type="button"
          onClick={onIncrease}
          aria-label="Increase quantity"
          className="text-[12px] font-semibold text-white"
        >
          +
        </button>
      </div>
    </div>
  );
}

function ColorSwatches({
  selectedColorId,
  onSelect,
  sizeClass,
}: {
  selectedColorId: string;
  onSelect: (colorId: string) => void;
  sizeClass: string;
}): JSX.Element {
  return (
    <div className="flex items-start gap-2 md:gap-3">
      {colors.map((color) => {
        const isActive = selectedColorId === color.id;

        return (
          <button
            key={color.id}
            type="button"
            aria-label={color.label}
            onClick={() => onSelect(color.id)}
            className={`${sizeClass} rounded-full ${color.swatchClass} ${isActive
              ? "ring-2 ring-white ring-offset-2 ring-offset-[#0D0D0D]"
              : ""
              } ${color.id === "black"
                ? "shadow-[inset_0px_4px_6px_rgba(0,0,0,0.4)]"
                : ""
              } ${color.id === "black" || color.id === "gold"
                ? "border border-[#7E7E7E]"
                : ""
              }`}
          />
        );
      })}
    </div>
  );
}

export default function ProductHero({
  onAddToCart,
}: ProductHeroProps): JSX.Element {
  const [selectedColorId, setSelectedColorId] = useState("black");
  const [quantity, setQuantity] = useState(1);

  const selectedColor = useMemo(
    () => colors.find((color) => color.id === selectedColorId) ?? colors[1],
    [selectedColorId]
  );

  const handleDecrease = (): void => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleIncrease = (): void => {
    setQuantity((prev) => prev + 1);
  };

  const handleAddToCart = (): void => {
    onAddToCart({
      productId: "mclaren-zen-switch-2",
      title: "McLaren Racing x Zen Switch 2",
      price: 40,
      quantity,
      image: "/use-cases/mclaren.png",
      colorLabel: selectedColor.label,
      colorHex: selectedColor.hex,
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.92, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
    },
  };

  return (
    <motion.section
      className="relative w-full overflow-hidden bg-[#0D0D0D]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      style={{ position: "relative" }}
    >
      {/* =========================
          MOBILE / MD DOWN
          ========================= */}
      <motion.div variants={itemVariants} className="mx-auto flex w-full max-w-[393px] flex-col px-4 pt-5 pb-8 lg:hidden">
        <div className="flex flex-col gap-[6px]">
          <h1 className="max-w-[328px] bg-[linear-gradient(104.81deg,#FFFFFF_34.43%,#7D7D7D_94.04%)] bg-clip-text font-[Montserrat] text-[32px] font-bold leading-[120%] tracking-[-0.02em] text-transparent">
            McLaren Racing x
            <br />
            Zen Switch 2
          </h1>

          <p className="max-w-[290px] font-[Montserrat] text-[16px] font-medium leading-[140%] text-white/60">
            Experience adjustable noise control with the official earplug of
            McLaren Racing.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <p className="font-[Montserrat] text-[16px] font-medium leading-[120%] text-white">
              Color : {selectedColor.label}
            </p>

            <ColorSwatches
              selectedColorId={selectedColorId}
              onSelect={setSelectedColorId}
              sizeClass="h-[30px] w-[30px]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-[Montserrat] text-[16px] font-medium leading-[120%] text-white">
              McLaren Collection
            </p>

            <button
              type="button"
              aria-label="McLaren Orange"
              className="h-[30px] w-[30px] rounded-full border border-[#1D242D] bg-[linear-gradient(180deg,#5A2D00_0%,#A65300_20.77%,#FF8000_36.15%,#FFC266_49.82%,#C46200_63.76%,#FF8000_81.63%,#3D1F00_100%)] shadow-[0px_1px_2px_rgba(13,13,18,0.06)]"
            />
          </div>
        </div>

        <motion.div variants={imageVariants} className="relative mx-auto h-[300px] w-[654px] max-w-full">
          <Image
            src="/use-cases/mclaren.png"
            alt="McLaren Racing x Zen Switch 2"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 654px"
            className="object-contain"
          />
        </motion.div>

        <div className="mt-8 flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <span className="font-[Poppins] text-[18px] font-medium leading-[120%] text-white">
              Price:
            </span>
            <span className="font-[Poppins] text-[32px] font-bold leading-[140%] tracking-[-0.02em] text-white">
              €40.00
            </span>
          </div>

          <div className="flex flex-wrap gap-[7px]">
            <QuantitySelector
              quantity={quantity}
              onDecrease={handleDecrease}
              onIncrease={handleIncrease}
              className="h-[36px] w-[90px] px-[10px]"
            />

            <button
              type="button"
              onClick={handleAddToCart}
              className="flex h-[36px] w-[134px] items-center justify-center rounded-[31px] border border-white px-[10px] font-[Inter] text-[13px] font-medium text-white"
            >
              Add to Cart
            </button>

            <button
              type="button"
              className="flex h-[42px] w-[199px] items-center justify-center rounded-[118px] bg-[#882EFF] px-[10px] font-[Montserrat] text-[16px] font-semibold tracking-[-0.02em] text-white"
            >
              Buy with Shop
            </button>
          </div>

          <button
            type="button"
            className="w-fit font-[Poppins] text-[14px] font-medium leading-[120%] text-white underline"
          >
            More Payment Options
          </button>
        </div>
      </motion.div>

      {/* =========================
          LG
          ========================= */}
      <motion.div variants={itemVariants} className="mx-auto hidden w-full max-w-[1180px] grid-cols-[0.9fr_1.05fr_0.75fr] items-center gap-6 px-8 py-14 lg:grid xl:hidden">
        <div className="flex flex-col justify-center">
          <h1 className="max-w-[260px] bg-[linear-gradient(104.81deg,#FFFFFF_34.43%,#7D7D7D_94.04%)] bg-clip-text font-[Montserrat] text-[40px] font-bold leading-[1.05] tracking-[-0.03em] text-transparent">
            McLaren Racing x
            <br />
            Noise Cancellation
          </h1>

          <p className="mt-6 max-w-[300px] font-[Montserrat] text-[18px] leading-[1.5] text-white/60">
            Experience adjustable noise control with the official earplug of
            McLaren Racing.
          </p>

          <div className="mt-14">
            <p className="mb-6 font-[Montserrat] text-[16px] font-medium text-white">
              Color : {selectedColor.label}
            </p>

            <ColorSwatches
              selectedColorId={selectedColorId}
              onSelect={setSelectedColorId}
              sizeClass="h-[28px] w-[28px]"
            />

            <p className="mt-10 mb-6 font-[Montserrat] text-[16px] font-medium text-white">
              McLaren Collection
            </p>

            <button
              type="button"
              aria-label="McLaren Orange"
              className="h-[28px] w-[28px] rounded-full border border-[#1D242D] bg-[linear-gradient(180deg,#5A2D00_0%,#A65300_20.77%,#FF8000_36.15%,#FFC266_49.82%,#C46200_63.76%,#FF8000_81.63%,#3D1F00_100%)]"
            />
          </div>
        </div>

        <motion.div variants={imageVariants} className="relative mx-auto h-[470px] w-[440px]">
          <Image
            src="/use-cases/mclaren.png"
            alt="McLaren Racing x Noise Cancellation"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 440px"
            className="object-cover"
          />
        </motion.div>

        <div className="flex flex-col justify-center">
          <div>
            <p className="font-[Poppins] text-[18px] font-medium text-white">
              Price:
            </p>
            <p className="mt-1 font-[Poppins] text-[44px] font-bold tracking-[-0.02em] text-white">
              €40.00
            </p>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <QuantitySelector
              quantity={quantity}
              onDecrease={handleDecrease}
              onIncrease={handleIncrease}
              className="h-[36px] w-[90px]"
            />

            <button
              type="button"
              onClick={handleAddToCart}
              className="flex h-[36px] w-[120px] items-center justify-center rounded-[31px] border border-white font-[Inter] text-[13px] font-medium text-white"
            >
              Add to Cart
            </button>
          </div>

          <button
            type="button"
            className="mt-5 flex h-[42px] w-[190px] items-center justify-center rounded-[118px] bg-[#882EFF] font-[Montserrat] text-[15px] font-semibold text-white"
          >
            Buy with Shop
          </button>

          <button
            type="button"
            className="mt-5 w-fit font-[Poppins] text-[13px] font-medium text-white underline"
          >
            More Payment Options
          </button>
        </div>
      </motion.div>

      {/* =========================
          XL+
          ========================= */}
      <motion.div variants={itemVariants} className="mx-auto hidden w-full max-w-[1320px] grid-cols-[0.95fr_1.1fr_0.8fr] items-center gap-8 px-10 py-16 xl:grid">
        <div className="flex flex-col justify-center">
          <h1 className="max-w-[430px] bg-[linear-gradient(104.81deg,#FFFFFF_34.43%,#7D7D7D_94.04%)] bg-clip-text font-[Montserrat] text-[66px] font-bold leading-[1.06] tracking-[-0.03em] text-transparent">
            McLaren Racing x
            <br />
            Noise Cancellation
          </h1>

          <p className="mt-7 max-w-[340px] font-[Montserrat] text-[20px] leading-[1.55] text-white/60">
            Experience adjustable noise control with the official earplug of
            McLaren Racing.
          </p>

          <div className="mt-16">
            <p className="mb-6 font-[Montserrat] text-[18px] font-medium text-white">
              Color : {selectedColor.label}
            </p>

            <ColorSwatches
              selectedColorId={selectedColorId}
              onSelect={setSelectedColorId}
              sizeClass="h-[30px] w-[30px]"
            />

            <p className="mt-12 mb-6 font-[Montserrat] text-[18px] font-medium text-white">
              McLaren Collection
            </p>

            <button
              type="button"
              aria-label="McLaren Orange"
              className="h-[30px] w-[30px] rounded-full border border-[#1D242D] bg-[linear-gradient(180deg,#5A2D00_0%,#A65300_20.77%,#FF8000_36.15%,#FFC266_49.82%,#C46200_63.76%,#FF8000_81.63%,#3D1F00_100%)]"
            />
          </div>
        </div>

        <motion.div variants={imageVariants} className="relative mx-auto h-[560px] w-[560px]">
          <Image
            src="/use-cases/mclaren.png"
            alt="McLaren Racing x Noise Cancellation"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
            className="object-contain"
          />
        </motion.div>

        <div className="flex flex-col justify-center">
          <div>
            <p className="font-[Poppins] text-[20px] font-medium text-white">
              Price:
            </p>
            <p className="mt-1 font-[Poppins] text-[48px] font-bold tracking-[-0.02em] text-white">
              €40.00
            </p>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <QuantitySelector
              quantity={quantity}
              onDecrease={handleDecrease}
              onIncrease={handleIncrease}
              className="h-[38px] w-[96px]"
            />

            <button
              type="button"
              onClick={handleAddToCart}
              className="flex h-[38px] w-[132px] items-center justify-center rounded-[31px] border border-white font-[Inter] text-[13px] font-medium text-white"
            >
              Add to Cart
            </button>
          </div>

          <button
            type="button"
            className="mt-5 flex h-[46px] w-[210px] items-center justify-center rounded-[118px] bg-[#882EFF] font-[Montserrat] text-[16px] font-semibold text-white"
          >
            Buy with Shop
          </button>

          <button
            type="button"
            className="mt-5 w-fit font-[Poppins] text-[14px] font-medium text-white underline"
          >
            More Payment Options
          </button>
        </div>
      </motion.div>
    </motion.section>
  );
}