"use server";

import prisma from "../db/db";

export async function getNewsLetterSubscribers() {
  try {
    const newsletterSubscribers = await prisma.newsletterSubscriber.findMany();

    if (!newsletterSubscribers) {
      throw new Error("News Letter Subscribers not found.");
    }

    return newsletterSubscribers;
  } catch (error) {
    console.error(`Error fetching subscribers :`, error);
    throw new Error("Error occured while fetching subscribers.");
  }
}

export async function addNewsLetterSubscriber(email: string) {
  try {
    const createdNewsletterSubscriber =
      await prisma.newsletterSubscriber.create({
        data: {
          email,
          consent: true,
        },
      });

    if (!createdNewsletterSubscriber) {
      throw new Error("Newsletter Subscriber couldn't create.");
    }

    return createdNewsletterSubscriber;
  } catch (error) {
    console.error(`Error creating newsletter subscriber:`, error);
    throw new Error("Error occured while creating newsletter subscriber.");
  }
}
