"use client";

import { VehicleCard } from "@/components/VehicleCard";
import { Vehicle } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";

export const SimilarCars = ({ vehicles }: { vehicles: Vehicle[] }) => {
  return (
    <div className="text-center mb-5 min-w-0 px-10 max-[541px]:hidden">
      <p className="uppercase text-sm font-bold tracking-[0.35em] text-black/55 mb-4">
        Similar Vehicles
      </p>
      <h3 className="text-5xl font-black leading-none text-black max-[541px]:text-3xl max-w-2xl mx-auto">
        Discover Similar Cars From Our Collection
      </h3>
      <Swiper
        slidesPerView={1}
        spaceBetween={12}
        slidesOffsetBefore={12}
        slidesOffsetAfter={12}
        cssMode={true}
        freeMode={{
          enabled: true,
        }}
        breakpoints={{
          670: {
            slidesPerView: 2,
            spaceBetween: 24,
            slidesOffsetBefore: 40,
            slidesOffsetAfter: 24,
          },
          990: {
            slidesPerView: 3,
            spaceBetween: 24,
            slidesOffsetBefore: 40,
            slidesOffsetAfter: 24,
          },
        }}
        className="-mx-10! max-[541px]:-mx-3!"
      >
        {vehicles.map((vehicle, i) => {
          return (
            <SwiperSlide className="pt-10! pb-12! max-[760px]:pt-5!" key={i}>
              <VehicleCard vehicle={vehicle} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
