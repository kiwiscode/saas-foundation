"use client";

import { RegisterForm } from "@/components/auth/RegisterForm";
import { Switch } from "@/components/ui/switch";
import { useUserType } from "@/context/UserTypeContext";

export default function Home() {
  const { userType, setUserType } = useUserType();
  return (
    <>
      <div className="font-bold text-[14px] mb-[30px] mt-[90px] flex justify-center items-center gap-[8px]">
        <span className={`opacity-[${userType === "business" && 0.5}]`}>
          For Independents
        </span>
        <Switch
          onClick={() => {
            setUserType(
              userType === "independent" ? "business" : "independent"
            );
          }}
        />
        <span className={`opacity-[${userType === "independent" && 0.5}]`}>
          For Businesses
        </span>
      </div>
      <div className="div-block-268">
        <h1 className="hero_header">
          INDEPENDENT’S
          <br />
          PAY BUTTON
        </h1>
        <div className="div-block-267"></div>
      </div>

      <p className="hero_description">
        This is your personal gateway to getting paid for your skills, from any
        business, globally.
      </p>

      <div className="flex gap-[12px] justify-center items-center pt-[40px]">
        <RegisterForm size="lg" />
      </div>
    </>
  );
}
