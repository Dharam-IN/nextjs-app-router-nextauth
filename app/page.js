import Link from "next/link";

export const metadata = {
  title: "Home page",
  description: "home",
};

export default function Home() {

  return (
    <>
      <div className="grid grid-cols-1">
      <Link href={"/login"}>
        Login
      </Link>
      <Link href={"/profile"}>
        Profile
      </Link>
      </div>
    </>
  );
}
