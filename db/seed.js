import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const sources = [
  "website",
  "social_media",
  "referral",
  "email_campaign",
  "popup_modal",
  "partner",
  "event",
  "offline",
];

const statuses = ["active", "inactive"];
const consents = [true, false];
const tagsPool = [
  "tech",
  "design",
  "marketing",
  "newsletter",
  "offer",
  "trial",
];

const countriesAndCities = [
  { country: "DE", cities: ["Berlin", "Hamburg", "Munich"] },
  { country: "RO", cities: ["Bucharest", "Cluj-Napoca", "Timișoara"] },
  { country: "GB", cities: ["London", "Manchester", "Bristol"] },
  { country: "US", cities: ["New York", "San Francisco", "Chicago"] },
  { country: "TR", cities: ["Istanbul", "Ankara", "Izmir"] },
  { country: "FR", cities: ["Paris", "Lyon", "Marseille"] },
  { country: "ES", cities: ["Madrid", "Barcelona", "Valencia"] },
];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomTags() {
  const shuffled = [...tagsPool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.floor(Math.random() * 3)); // 0-2 random tags
}

function maybe(value) {
  return Math.random() > 0.7 ? null : value;
}

async function main() {
  const users = [];

  for (let i = 1; i <= 100; i++) {
    await new Promise((res) => setTimeout(res, 0.5));

    const location = getRandom(countriesAndCities);
    const city = getRandom(location.cities);
    const status = getRandom(statuses);
    const source = getRandom(sources);
    const consent = getRandom(consents);
    const tags = getRandomTags();
    const name = maybe(`User ${i}`);
    const language = maybe(getRandom(["en", "de", "tr", "fr", "es", "ro"]));
    const unsubscribedAt =
      status === "inactive" && Math.random() > 0.5 ? new Date() : null;

    const user = await prisma.newsletterSubscriber.create({
      data: {
        email: `user${i}@example.com`,
        name,
        status,
        source,
        consent,
        tags,
        country: location.country,
        city,
        language,
        unsubscribedAt,
        createdAt: new Date(),
      },
    });

    users.push(user);
  }

  const createdUsers = await Promise.all(users);
  console.log(`✅ Seeded ${createdUsers.length} newsletter subscribers.`);
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
