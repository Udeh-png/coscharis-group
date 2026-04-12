import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export const NewsFeeds = () => {
  return (
    <div className="px-10 max-[541px]:px-5 mt-15 max-[541px]:mt-10 pb-500">
      <div className="flex max-[950px]:flex-col-reverse gap-15">
        <div className="relative flex-1">
          <Image src={"/"} alt="" fill sizes="" />
        </div>

        <div className="flex flex-col flex-1">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-black/45">
            news feed
          </p>
          <h3 className="text-5xl max-[541px]:text-4xl font-bold mt-4 leading-none">
            The heading of the news feed goes here
          </h3>

          <p className="text-base leading-relaxed text-black/74 max-[541px]:text-sm mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            autem quod minima exercitationem tenetur vel culpa. Possimus quia
            quis vitae sint debitis nam facilis ea nesciunt fugiat illum porro
            sed qui facere omnis, natus incidunt culpa sequi provident saepe
            consequuntur ad tempora! Nam ad dolor vitae voluptate commodi
            incidunt architecto!
          </p>

          <div className="mt-8">
            <Link
              href={""}
              className="bg-red-700 px-5 py-3 text-white inline-flex items-center gap-2 rounded-full text-sm font-semibold hover:translate-x-1 transition-transform duration-300 will-change-transform"
            >
              Read More
              <HiOutlineArrowLongRight className="text-lg" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
