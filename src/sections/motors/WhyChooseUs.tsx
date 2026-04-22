export const WhyChooseUs = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0" />
      <div className="relative py-15 px-5 md:px-10 max-[770px]:py-7">
        <p className="text-sm uppercase text-black/45 tracking-[0.35em] font-semibold mb-5 max-[770px]:mb-3">
          Why Choose Us
        </p>
        <h3 className="capitalize font-black text-5xl leading-none max-w-2xl mb-10 max-[770px]:text-4xl max-[770px]:mb-5">
          What makes us Different from the rest?
        </h3>

        <p className="text-black/45 max-w-3xl mb-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          dolores voluptatum aut veritatis fugit neque at possimus! Quam rem
          molestias deleniti voluptatibus similique eveniet, accusantium eum,
          quas reiciendis veritatis explicabo.
        </p>

        <div className="grid grid-cols-3 max-[770px]:gap-10 max-[990px]:grid-cols-1">
          <div className="border-r-2 border-red-700 px-7 max-[770px]:border-0 max-[770px]:px-0">
            <div className="flex gap-4 mb-2">
              <span className="text-sm font-black text-black/30">01</span>
              <p className="font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              </p>
            </div>

            <p className="text-sm pl-8 text-black/75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, nostrum excepturi nihil aliquid officiis impedit a
              dicta placeat, eos rem dignissimos totam nobis facilis distinctio
              saepe numquam sequi temporibus praesentium?
            </p>
          </div>

          <div className="border-r-2 border-red-700 px-7 max-[770px]:border-0 max-[770px]:px-0">
            <div className="flex gap-4 mb-2">
              <span className="text-sm font-black text-black/30">02</span>
              <p className="font-bold">Consectetur adipisicing elit</p>
            </div>

            <p className="text-sm pl-8 text-black/75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, nostrum excepturi nihil aliquid officiis impedit a
              dicta placeat, eos rem dignissimos totam nobis facilis distinctio
              saepe numquam sequi temporibus praesentium? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Unde, officia. Quisquam,
              tenetur?
            </p>
          </div>

          <div className="px-7 max-[770px]:px-0">
            <div className="flex gap-4 mb-2">
              <span className="text-sm font-black text-black/30">03</span>
              <p className="font-bold">Lorem Ipsum</p>
            </div>

            <p className="text-sm pl-8 text-black/75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, nostrum excepturi nihil aliquid officiis impedit a
              dicta placeat, eos rem dignissimos totam nobis facilis distinctio
              saepe numquam sequi temporibus praesentium? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Unde, officia. Quisquam,
              tenetur?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
