import { FeaturedNewsFeeds } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const readStoryClassName =
  "border-b-2 border-b-red-700 pb-2 max-[541px]:pb-1 inline-flex items-center gap-2 tracking-widest font-semibold hover:translate-x-1 transition-transform duration-300 will-change-transform";

export const NewsFeeds = () => {
  const [headline, ...newsItems] = FeaturedNewsFeeds;

  return (
    <section className="mt-15 max-[541px]:mt-10 px-10 max-[541px]:px-5">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-black/45">
        news feeds
      </p>

      <div className="grid grid-cols-2 max-[1050px]:grid-cols-1 gap-5 max-[541px]:gap-10 mt-5">
        <aside className="grid grid-rows-[1.5fr_1fr] max-[541px]:grid-rows-2 w-full aspect-square max-[1050px]:aspect-auto">
          <div className="relative">
            <Image
              src={headline.imageSrc}
              alt={headline.imageAlt}
              fill
              sizes="(max-width: 1050px) calc(100vw - 80px), calc((100vw - 100px) / 2)"
              quality={75}
              className="object-cover object-top"
            />
          </div>

          <div className="mt-3">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-black/45">
              {headline.category}
            </p>

            <p className="font-bold text-3xl max-[541px]:text-2xl mt-2 line-clamp-3 max-[541px]:line-clamp-2 leading-none">
              {headline.title}
            </p>

            <p className="text-base leading-relaxed text-black/74 max-[541px]:text-sm mt-2 line-clamp-3">
              {headline.excerpt}
            </p>

            <div className="mt-5 max-[541px]:mt-3 gap-x-5 flex items-center">
              <Link
                href={headline.href}
                className={`${readStoryClassName} text-sm max-[541px]:text-xs`}
              >
                Read Full Story
                <HiOutlineArrowLongRight className="text-lg" />
              </Link>
            </div>
          </div>
        </aside>

        <aside className="space-y-7 overflow-auto max-h-155">
          {newsItems.map((news) => (
            <div
              className="grid grid-cols-[1fr_1.5fr] gap-x-3.5"
              key={news.title}
            >
              <div className="relative size-full max-h-40">
                <Image
                  src={news.imageSrc}
                  alt={news.imageAlt}
                  fill
                  sizes="(max-width: 541px) calc((100vw - 54px) * 0.4), (max-width: 1050px) calc((100vw - 80px) * 0.4), calc(((100vw - 100px) / 2) * 0.4)"
                  quality={70}
                  className="object-cover"
                />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-black/45">
                  {news.category}
                </p>

                <p className="font-bold line-clamp-2 max-[541px]:line-clamp-3 max-[541px]:leading-none">
                  {news.title}
                </p>

                <p className="text-sm leading-relaxed text-black/74 mt-1 line-clamp-3 max-[541px]:hidden">
                  {news.excerpt}
                </p>

                <div className="mt-5 max-[541px]:mt-3 gap-x-5 flex items-center text-xs">
                  <Link href={news.href} className={readStoryClassName}>
                    Read Full Story
                    <HiOutlineArrowLongRight className="text-lg" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
};
