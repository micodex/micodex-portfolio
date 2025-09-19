export interface Blog {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  src: string;
  tags: string[];
  content: string;
}

type ColorKey = "blue" | "green" | "orange" | "pink" | "slate";
type ColorShades = {
  50: string;
  500: string;
};
import { ReactNode } from "react";
export type Colors = Record<ColorKey, ColorShades>;

export interface Skill {
  id: number;
  type: string;
  icon: ReactNode;
  // color: keyof typeof colors;
  color: ColorKey;
  title: string;
  description: string;
  level: string;
}
