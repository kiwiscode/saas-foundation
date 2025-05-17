"use server";

import axios from "axios";
import prisma from "../db/db";

// Subscribe to the newsletter
export async function addToNewsLetter(email: string) {
  try {
    const ipInfoResponse = await axios.get(
      `https://ipinfo.io/json?token=${process.env.IPINFO_TOKEN}`
    );

    console.log("ip info response:", ipInfoResponse);

    const { country, city } = ipInfoResponse.data;

    const existing = await prisma.newsletterSubscriber.findUnique({
      where: { email },
    });

    if (existing) {
      throw new Error("This email is already subscribed to the newsletter.");
    }

    const subscriber = await prisma.newsletterSubscriber.create({
      data: { email, country, city },
    });

    return subscriber;
  } catch (error) {
    console.error(
      `Error adding user to the newsletter subscriber collection with email ${email}:`,
      error
    );
    throw new Error(
      "Error occurred while adding user to the newsletter subscriber collection."
    );
  }
}
