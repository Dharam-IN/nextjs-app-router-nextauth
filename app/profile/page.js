import React from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Logout from "../../components/Logout";

export const metadata = {
  title: "Profile",
  description: "User Profile Page",
};

const ProfilePage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session)

  // Redirect to sign-in page if no session
  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      <h1>Welcome, {session.user.name}</h1>
      <p>Email: {session.user.email}</p>
      <p>Token: {session.user.token}</p> {/* Custom token */}
      <Logout/>
    </div>
  );
};

export default ProfilePage;
