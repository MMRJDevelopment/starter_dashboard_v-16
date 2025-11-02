import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo.svg"
      width={400}
      height={400}
      alt="Avatar"
      className="h-16 w-full rounded-full"
    />
  );
}
