import {
  SiAsus,
  SiBmw,
  SiFord,
  SiHp,
  SiHuawei,
  SiJaguar,
  SiLandrover,
  SiLenovo,
  SiMini,
  SiRenault,
  SiRollsroyce,
  SiSamsung,
} from "react-icons/si";

const brandIcons = [
  SiBmw,
  SiLenovo,
  SiJaguar,
  SiHuawei,
  SiFord,
  SiHp,
  SiRollsroyce,
  SiSamsung,
  SiRenault,
  SiAsus,
  SiLandrover,
  SiMini,
];

export const Marquee = () => {
  return (
    <div className="overflow-hidden">
      <div className="animate-marquee flex w-max items-center text-6xl text-black/40 max-[541px]:text-5xl">
        {[...brandIcons, ...brandIcons].map((Icon, index) => (
          <div
            key={`${Icon.name}-${index}`}
            className="flex h-40 shrink-0 items-center px-15 max-[541px]:h-30 max-[541px]:px-5"
          >
            <Icon className="shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};
