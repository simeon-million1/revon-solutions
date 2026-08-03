export type FontCategory = "headline" | "body" | "accent" | "mono";

export interface FontConfig {
  id: string;
  name: string;
  category: FontCategory;
  weights: (string | number)[];
  variable: string;
  cssFamily: string;
  description?: string;
}

export type FontLibraryMap = Record<string, FontConfig>;
