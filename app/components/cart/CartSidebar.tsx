"use client";

import Image from "next/image";
import { JSX, useEffect, useMemo, useRef, useState } from "react";import { Minus, Plus, Trash2, X } from "lucide-react";

type CartItem = {
  id: string;
  productId: string;
  title: string;
  variantTitle?: string;
  price: number;
  quantity: number;
  image: string;
  colorLabel?: string;
  colorHex?: string;
};

type SuggestedProduct = {
  id: string;
  title: string;
  price: number;
  image: string;
  colorLabel?: string;
  colorHex?: string;
};

type CartData = {
  items: CartItem[];
  suggestedProducts: SuggestedProduct[];
  shippingLabel: string;
  shippingAmount: number;
  currency: string;
};

type CartSidebarProps = {
  isOpen?: boolean;
  onClose?: () => void;
  data?: CartData;
  onIncreaseQty?: (itemId: string) => void;
  onDecreaseQty?: (itemId: string) => void;
  onRemoveItem?: (itemId: string) => void;
  onAddSuggested?: (productId: string) => void;
  onCheckout?: () => void;
};

const mockCartData: CartData = {
  currency: "USD",
  shippingLabel: "Free",
  shippingAmount: 0,
  items: [
    {
      id: "cart-item-1",
      productId: "prod-1",
      title: "McLaren Racing x Zen Switch 2",
      variantTitle: "Black",
      price: 49.99,
      quantity: 1,
      image: "/cart/cart-item-1.png",
      colorLabel: "Black",
      colorHex: "#111111",
    },
    {
      id: "cart-item-2",
      productId: "prod-2",
      title: "McLaren Racing x Zen Switch 2",
      variantTitle: "Black",
      price: 49.99,
      quantity: 1,
      image: "/cart/cart-item-1.png",
      colorLabel: "Black",
      colorHex: "#111111",
    },
  ],
  suggestedProducts: [
    {
      id: "suggested-1",
      title: "Zen Eclipse",
      price: 49.99,
      image: "/cart/cart-item-1.png",
      colorLabel: "Black",
      colorHex: "#111111",
    },
    {
      id: "suggested-2",
      title: "Zen Eclipse",
      price: 49.99,
      image: "/cart/cart-item-1.png",
      colorLabel: "Black",
      colorHex: "#111111",
    },
    {
      id: "suggested-3",
      title: "Zen Eclipse",
      price: 49.99,
      image: "/cart/cart-item-1.png",
      colorLabel: "Black",
      colorHex: "#111111",
    },
  ],
};

export default function CartSidebar({
  isOpen = true,
  onClose,
  data = mockCartData,
  onIncreaseQty,
  onDecreaseQty,
  onRemoveItem,
  onAddSuggested,
  onCheckout,
}: CartSidebarProps): JSX.Element | null {
  const [localItems, setLocalItems] = useState<CartItem[]>(data.items);
  const suggestedTrackRef = useRef<HTMLDivElement | null>(null);

  const items = localItems;

  const subtotal = useMemo(() => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [items]);

  const total = subtotal + data.shippingAmount;

  const formatPrice = (value: number): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: data.currency,
    }).format(value);
  };

  const handleIncreaseQty = (itemId: string): void => {
    if (onIncreaseQty) {
      onIncreaseQty(itemId);
      return;
    }

    setLocalItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQty = (itemId: string): void => {
    if (onDecreaseQty) {
      onDecreaseQty(itemId);
      return;
    }

    setLocalItems((prev) =>
      prev.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  const handleRemoveItem = (itemId: string): void => {
    if (onRemoveItem) {
      onRemoveItem(itemId);
      return;
    }

    setLocalItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const handleAddSuggested = (productId: string): void => {
    if (onAddSuggested) {
      onAddSuggested(productId);
      return;
    }

    console.log("Add suggested product:", productId);
  };

  const handleCheckout = (): void => {
    if (onCheckout) {
      onCheckout();
      return;
    }

    console.log("Continue to payment");
  };

  const scrollSuggestedBy = (direction: "left" | "right"): void => {
    if (!suggestedTrackRef.current) return;

    const card = suggestedTrackRef.current.querySelector(
      "[data-suggested-card]"
    ) as HTMLElement | null;

    if (!card) return;

    const gap = 16;
    const amount = card.offsetWidth + gap;

    suggestedTrackRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  if (!isOpen) return null;

  return (
    <aside className="flex h-dvh w-full flex-col bg-[#111012]">
      <div className="flex min-h-0 flex-1 flex-col px-4 py-4 sm:px-5 sm:py-5 lg:px-8 lg:py-8">
        <header className="flex items-center gap-3 pb-5 sm:pb-6">
          <h2 className="flex-1 font-[Poppins] text-[28px] font-semibold leading-none text-white sm:text-[30px] lg:text-[32px]">
            Your Cart
          </h2>

          <button
            type="button"
            aria-label="Close cart"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition hover:bg-white/5 hover:text-white"
          >
            <X size={22} />
          </button>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto pr-1">
          <div className="flex flex-col gap-5">
            <section className="flex flex-col gap-4 sm:gap-5">
              {items.map((item) => (
                <CartItemCard
                  key={item.id}
                  item={item}
                  formatPrice={formatPrice}
                  onIncreaseQty={handleIncreaseQty}
                  onDecreaseQty={handleDecreaseQty}
                  onRemoveItem={handleRemoveItem}
                />
              ))}
            </section>

            <section className="pt-2">
              <div className="mb-4 flex items-center gap-4">
                <h3 className="flex-1 bg-[linear-gradient(93.31deg,#FFFFFF_40.77%,#98979C_83.66%)] bg-clip-text font-[Montserrat] text-[20px] font-bold uppercase leading-[1.1] tracking-[-0.03em] text-transparent sm:text-[22px] lg:text-[24px]">
                  You May Also Like
                </h3>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => scrollSuggestedBy("left")}
                    className="flex h-10 w-16 items-center justify-center rounded-[89px] border border-white/20 text-white/60 lg:w-[120px]"
                    aria-label="Previous suggestions"
                  >
                    <ArrowLeft />
                  </button>

                  <button
                    type="button"
                    onClick={() => scrollSuggestedBy("right")}
                    className="flex h-10 w-16 items-center justify-center rounded-[89px] bg-white text-[#845CF2] lg:w-[120px]"
                    aria-label="Next suggestions"
                  >
                    <ArrowRight />
                  </button>
                </div>
              </div>

              <div
                ref={suggestedTrackRef}
                className="
                  flex gap-4 overflow-x-auto scroll-smooth
                  [scrollbar-width:none] [-ms-overflow-style:none]
                  [&::-webkit-scrollbar]:hidden
                "
              >
                {data.suggestedProducts.map((product) => (
                  <div
                    key={product.id}
                    data-suggested-card
                    className="w-[260px] shrink-0 sm:w-[280px] md:w-[300px]"
                  >
                    <SuggestedProductCard
                      product={product}
                      formatPrice={formatPrice}
                      onAddSuggested={handleAddSuggested}
                    />
                  </div>
                ))}
              </div>

            </section>

            <section className="rounded-2xl bg-[#1B1A1A] px-4 py-6 sm:px-5 sm:py-7 lg:px-[14px] lg:py-[42px]">
              <div className="flex flex-col gap-4 sm:gap-5">
                <div className="flex items-center justify-between gap-4 text-[14px] text-white/70">
                  <span className="font-[Poppins]">Shipping</span>
                  <span className="font-[Poppins]">
                    {data.shippingAmount === 0
                      ? data.shippingLabel
                      : formatPrice(data.shippingAmount)}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 text-white">
                  <span className="font-[Poppins] text-[18px] font-medium">
                    Subtotal
                  </span>
                  <span className="font-[Poppins] text-[18px] font-medium">
                    {formatPrice(total)}
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="pt-4 sm:pt-5">
          <button
            type="button"
            onClick={handleCheckout}
            className="flex h-14 w-full items-center justify-center rounded-md bg-[#882EFF] px-6 text-center font-[Poppins] text-[16px] font-semibold text-white transition hover:opacity-95 sm:h-16 sm:text-[18px] lg:text-[20px]"
          >
            Continue to Payment
          </button>
        </div>
      </div>
    </aside>
  );
}

type CartItemCardProps = {
  item: CartItem;
  formatPrice: (value: number) => string;
  onIncreaseQty: (itemId: string) => void;
  onDecreaseQty: (itemId: string) => void;
  onRemoveItem: (itemId: string) => void;
};

function CartItemCard({
  item,
  formatPrice,
  onIncreaseQty,
  onDecreaseQty,
  onRemoveItem,
}: CartItemCardProps): JSX.Element {
  return (
    <article className="rounded-2xl bg-[#1B1A1A] p-3 sm:p-4">
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="relative h-[88px] w-[88px] shrink-0 overflow-hidden rounded-lg bg-[#100F12] sm:h-[100px] sm:w-[100px] lg:h-[119px] lg:w-[117px]">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 88px, (max-width: 1024px) 100px, 117px"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
            <h3 className="max-w-[320px] font-[Montserrat] text-[16px] font-semibold leading-[1.25] text-white sm:text-[17px] lg:text-[18px]">
              {item.title}
            </h3>

            <p className="whitespace-nowrap font-[Poppins] text-[18px] font-normal tracking-[0.02em] text-white sm:text-[19px] lg:text-[20px]">
              {formatPrice(item.price)}
            </p>
          </div>

          <div className="mt-3 flex items-center gap-2">
            <span className="font-[Poppins] text-[12px] font-medium text-white">
              {`Color : ${item.colorLabel ?? item.variantTitle ?? "Default"}`}
            </span>

            <span
              className="h-5 w-5 rounded-full border-2 border-white/20 shadow-[inset_0px_4px_6px_rgba(0,0,0,0.4)] sm:h-6 sm:w-6"
              style={{
                background:
                  item.colorHex ??
                  "linear-gradient(180deg,#000000_0%,#1A1A1A_24.56%,#3A3A3A_42.85%,#111111_58.01%,#4A4A4A_80.09%,#000000_100%)",
              }}
            />
          </div>

          <div className="mt-3 inline-flex h-9 items-center rounded-full bg-[#100F12] px-3 sm:px-4">
            <button
              type="button"
              aria-label={`Remove one ${item.title}`}
              onClick={() => onDecreaseQty(item.id)}
              className="flex h-5 w-5 items-center justify-center text-white/70 transition hover:text-white"
            >
              <Minus size={15} />
            </button>

            <button
              type="button"
              aria-label={`Remove ${item.title} from cart`}
              onClick={() => onRemoveItem(item.id)}
              className="mx-3 flex h-5 w-5 items-center justify-center text-white/70 transition hover:text-white sm:mx-4"
            >
              <Trash2 size={15} />
            </button>

            <span className="min-w-[18px] text-center font-[Poppins] text-[15px] font-medium text-white sm:text-[16px]">
              {item.quantity}
            </span>

            <button
              type="button"
              aria-label={`Add one ${item.title}`}
              onClick={() => onIncreaseQty(item.id)}
              className="ml-3 flex h-5 w-5 items-center justify-center text-white/70 transition hover:text-white sm:ml-4"
            >
              <Plus size={15} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

type SuggestedProductCardProps = {
  product: SuggestedProduct;
  formatPrice: (value: number) => string;
  onAddSuggested: (productId: string) => void;
};

function SuggestedProductCard({
  product,
  formatPrice,
  onAddSuggested,
}: SuggestedProductCardProps): JSX.Element {
  return (
    <article className="rounded-2xl bg-[#1B1A1A] p-4">
      <div className="flex gap-3">
        <div className="relative h-[92px] w-[92px] shrink-0 overflow-hidden rounded-lg bg-[#100F12] sm:h-[110px] sm:w-[110px]">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 92px, 110px"
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex flex-col gap-2">
            <h4 className="line-clamp-2 font-[Montserrat] text-[18px] font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-[20px]">
              {product.title}
            </h4>

            <span className="font-[Poppins] text-[11px] font-medium text-white">
              {`Color : ${product.colorLabel ?? "Default"}`}
            </span>

            <span
              className="h-7 w-7 rounded-full border-2 border-white/20 shadow-[inset_0px_4px_6px_rgba(0,0,0,0.4)]"
              style={{
                background:
                  product.colorHex ??
                  "linear-gradient(180deg,#000000_0%,#1A1A1A_24.56%,#3A3A3A_42.85%,#111111_58.01%,#4A4A4A_80.09%,#000000_100%)",
              }}
            />
          </div>

          <div className="mt-auto flex items-end justify-between gap-2 pt-3">
            <p className="font-[Poppins] text-[18px] font-normal tracking-[0.02em] text-white sm:text-[20px]">
              {formatPrice(product.price)}
            </p>

            <button
              type="button"
              onClick={() => onAddSuggested(product.id)}
              className="flex h-9 min-w-[72px] shrink-0 items-center justify-center rounded-full bg-white px-4 font-[Poppins] text-[13px] font-medium text-black transition hover:opacity-95 sm:h-10 sm:min-w-[80px] sm:text-[14px]"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

function ArrowLeft(): JSX.Element {
  return (
    <span className="relative block h-0 w-5">
      <span className="absolute left-0 top-0 block w-full border-t-[2.5px] border-current" />
      <span className="absolute left-0 top-0 block h-[2.5px] w-[10px] origin-left -rotate-45 bg-current" />
      <span className="absolute left-0 top-0 block h-[2.5px] w-[10px] origin-left rotate-45 bg-current" />
    </span>
  );
}

function ArrowRight(): JSX.Element {
  return (
    <span className="relative block h-0 w-5">
      <span className="absolute left-0 top-0 block w-full border-t-[2.5px] border-current" />
      <span className="absolute right-0 top-0 block h-[2.5px] w-[10px] origin-right rotate-45 bg-current" />
      <span className="absolute right-0 top-0 block h-[2.5px] w-[10px] origin-right -rotate-45 bg-current" />
    </span>
  );
}