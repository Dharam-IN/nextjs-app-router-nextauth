"use client"
import { signIn } from 'next-auth/react'
import { redirect } from 'next/navigation'
import React from 'react'

const page = () => {

    const handleLogin = async () => {
        console.log("CLicked")
        const response =  await signIn("credentials", {
            redirect: false,
            email: "email@mail.com",
            password: "P@$$w0rd",
        })
        console.log(response)
        if(response?.status === 200){
            redirect("/profile")
        }
    }

    return (
        <button onClick={() => handleLogin()}>
            SignIN
        </button>
    )
}

export default page