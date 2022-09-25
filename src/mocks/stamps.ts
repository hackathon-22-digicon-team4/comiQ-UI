import type { Stamp } from "@/types/types";
import s_fuffuffu from "@/assets/s_fuffuffu.png";
import s_kandoushita from "@/assets/s_kandoushita.png";
import s_koresuki from "@/assets/s_koresuki.png";
import s_oisu from "@/assets/s_oisu.png";
import s_souhanaranyaro from "@/assets/s_souhanaranyaro.png";
import s_tasukaru from "@/assets/s_tasukaru.png";
import s_w from "@/assets/s_w.png";

export const stamps: Stamp[] = [
  { name: "これすき", id: "1", imageUrl: s_koresuki },
  { name: "w", id: "2", imageUrl: s_w },
  { name: "感動した", id: "3", imageUrl: s_kandoushita },
  { name: "そうはならんやろ", id: "4", imageUrl: s_souhanaranyaro },
  { name: "おいすー", id: "5", imageUrl: s_oisu },
  { name: "フッフッフ", id: "6", imageUrl: s_fuffuffu },
  { name: "たすかる", id: "7", imageUrl: s_tasukaru },
];
