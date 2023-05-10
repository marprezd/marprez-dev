import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import logoImage from "../../public/images/logo.png";

type Props = {
  large?: boolean;
  className?: string;
  [key: string]: any;
};
export default function Logo({
  large = false,
  className,
  ...props
}: Props): JSX.Element {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx(className, "pointer-events-auto inline-flex items-center gap-x-2 text-xl font-semibold dark:text-white sm:text-2xl")}
      {...props}
    >
      <Image
        src={logoImage}
        alt=""
        sizes={large ? "4rem" : "2.25rem"}
        className={clsx(
          "rounded-full bg-gray-100 object-cover dark:bg-gray-800",
          large ? "h-16 w-16" : "h-9 w-9"
        )}
        priority
      />
      <span>marprez</span>
    </Link>
  );
}
