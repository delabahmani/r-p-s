import { motion } from "framer-motion";
import React from "react";
import Buttons from "./Buttons";

type RpsButtonProps = {
  advanced: boolean;
  onCLick: any;
};

export default function RpsButtons({ advanced, onCLick }: RpsButtonProps) {
  return (
    <motion.div
      className="absolute left-0 top-0 grid h-full w-full place-items-center"
      transition={{ duration: 0.5 }}
    >
      {advanced ? (
        <div className="grid-three grid h-full w-[360px] grid-rows-3">
          <Buttons classN="sci" Id="sci" onClicK={() => onCLick(0)}>
            <img src="/icon-scissors.svg" alt="scissors" />
          </Buttons>

          <Buttons classN="spock" Id="spock" onClicK={() => onCLick(3)}>
            <img src="/icon-spock.svg" alt="spock" />
          </Buttons>

          <Buttons classN="paper" Id="paper" onClicK={() => onCLick(1)}>
            <img src="/icon-paper.svg" alt="paper" />
          </Buttons>

          <Buttons classN="liz" Id="liz" onClicK={() => onCLick(4)}>
            <img src="/icon-lizard.svg" alt="lizard" />
          </Buttons>

          <Buttons classN="rock" Id="rock" onClicK={() => onCLick(2)}>
            <img src="/icon-rock.svg" alt="rock" />
          </Buttons>
        </div>
      ) : (
        <div className="grid-two grid h-[360px] w-[350px] absolute">
          <Buttons classN="sci2" Id="sci" onClicK={() => onCLick(0)}>
            <img src="/icon-scissors.svg" alt="scissors" className="relative left-[290px] top-3 sci" />
          </Buttons>
          <Buttons classN="paper2" Id="paper" onClicK={() => onCLick(1)}>
            <img src="/icon-paper.svg" alt="paper" />
          </Buttons>
          <Buttons classN="rock2" Id="rock" onClicK={() => onCLick(2)}>
            <img src="/icon-rock.svg" alt="rock" />
          </Buttons>
        </div>
      )}
    </motion.div>
  );
}
