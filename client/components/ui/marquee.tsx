"use client";

import Image from "next/image";

function Marquee() {
  const images = [
    "/images/a_smiling_young_freelancer_sitting_at_a_cafe_table_.png",
    "/images/a_smiling_male_freelancer_working_on_a_laptop.png",
    "/images/a_smiling_young_freelancer_sitting_at_a_wooden_cafe_.png",
  ];

  return (
    <div className="pt-0 pb-[80px] overflow-hidden px-[5%] relative">
      <div className="flex mt-[50px] items-center justify-start">
        <div className="marquee flex items-center justify-start shrink-0 grow-0 basis-auto">
          <div className="flex items-center justify-start">
            {[...images, ...images].map((src, index) => (
              <div
                key={index}
                className="relative rounded-[16px] md:min-w-[588px] md:h-[330px] mx-[12px] overflow-hidden max-md:min-w-[404px] max-md:h-[203px]"
              >
                <Image
                  src={src}
                  alt={`Marquee item ${index}`}
                  fill
                  className="object-cover rounded-[12px]"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Marquee };
