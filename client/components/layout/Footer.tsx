"use client";

import useWindowDimension from "@/hooks/useWindowDimension";
import { addToNewsLetter } from "@/server-actions/user.actions";
import { useState } from "react";

const Footer = () => {
  const { width } = useWindowDimension();
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"]; // örnek 4 item
  const [email, setEmail] = useState<string>("");
  // Sabit span class'ı belirle
  let colSpanClass = "";
  // if width bigger then 768 break point
  if (items.length === 3 && typeof width === "number" && width > 1024) {
    colSpanClass = "col-span-4";
  } else if (items.length === 4 && typeof width === "number" && width > 1024) {
    colSpanClass = "col-span-3";
  } else if (
    items.length > 4 ||
    (items.length < 3 && typeof width === "number" && width > 1024)
  ) {
    colSpanClass = "col-span-12";
  }
  // if width smaller or equal to 768 break point
  else {
    colSpanClass = "col-span-12";
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handleAddToNewsLetter = async (email: string) => {
    try {
      const newsLetterSubscriber = await addToNewsLetter(email);

      console.log("news letter subscriber:", newsLetterSubscriber);
    } catch (error) {
      console.error("error:", error);
    }
  };

  return (
    <>
      {/* footer */}
      <footer className="border-t-2 p-4 mt-[90px]">
        <div className="mt-20 flex flex-col md:flex-row max-md:gap-10 justify-center items-start gap-[180px] max-lg:gap-[100px] font-regular-title-regular">
          <div className="flex flex-col items-center gap-3 w-full md:w-auto max-md:order-2">
            <p className="text-center m-0">GIVE AN EMAIL, GET THE NEWSLETTER</p>

            {/* Input ve Subscribe butonu */}
            <div className="flex w-full max-w-md overflow-hidden border-b-1 border-[rgba(0,0,0,0.3)]">
              <input
                onChange={handleInputChange}
                value={email}
                type="email"
                placeholder="name@gmail.com"
                className="flex-1 px-4 py-2 outline-none border-0"
              />
              <button
                onClick={() => {
                  if (email) {
                    handleAddToNewsLetter(email);
                  }
                }}
                className="flex items-center gap-2 bg-transparent text-black px-4 py-2 border-0 font-regular-title-regular text-lg cursor-pointer"
                style={{
                  cursor: email ? "pointer" : "not-allowed",
                }}
              >
                Subscribe
                {/* <Mail size={16} /> */} ↗
              </button>
            </div>
            {/* Checkbox */}
            <div className="flex w-full items-center gap-2 mt-0 text-xs text-gray-600">
              <input type="checkbox" id="agree" className="w-4 h-4" />
              <label htmlFor="agree">
                I agree to the processing of Personal data
              </label>
            </div>
            <div className="text-center text-gray-600 mt-5 text-sm">
              Subscribe to receive news, free giveaways, once-in-a- <br />{" "}
              lifetime deals, and more.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
