import { Youtube, Instagram } from "lucide-react";

export type Platform = {
  id: string;
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  description: string;
};

export const platforms = [
  {
    id: "instagram",
    name: "Instagram",
    icon: Instagram,
    description: "Share posts and stories directly to Instagram",
  },
  {
    id: "youtube",
    name: "YouTube",
    icon: Youtube,
    description: "Publish videos to your YouTube channel",
  },
];
