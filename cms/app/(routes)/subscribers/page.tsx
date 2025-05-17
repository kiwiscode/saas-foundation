"use client";

import { z } from "zod";
import { columns } from "../../../components/ui/table/components/columns";
import { DataTable } from "../../../components/ui/table/data-table";
import { newsletterSubscriberSchema } from "../../../components/ui/table/data/schema";
import { getNewsLetterSubscribers } from "@/server-actions/user.actions";
import { useEffect, useState } from "react";

type NewsletterSubscriber = z.infer<typeof newsletterSubscriberSchema>;

const Page = () => {
  const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>([]);

  const getSubscribers = async () => {
    try {
      const subscribersFromDB = await getNewsLetterSubscribers();

      setSubscribers(subscribersFromDB);
      return subscribersFromDB;
    } catch (error) {
      console.error("error:", error);
    }
  };

  const getCreatedSubscriber = (data: NewsletterSubscriber) => {
    setSubscribers((prevState) => [...prevState, data]);
  };

  useEffect(() => {
    getSubscribers();
  }, []);

  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex ">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-[var(--color-muted-foreground)]">
              Here&apos;s a list of your Newsletter subscribers!
            </p>
          </div>
        </div>
        <DataTable
          onNewSubscriberAdded={getCreatedSubscriber}
          columns={columns}
          data={subscribers}
        />
      </div>
    </>
  );
};

export default Page;
