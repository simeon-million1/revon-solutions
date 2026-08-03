# 🔤 Project Font Library

A structured, reusable font library containing your favorite headline and body text Google Fonts.

---

## 📋 Included Fonts

### 📰 Headline Fonts
1. **Playfair Display** (Serif, 400 weight & bold)
2. **Anton** (Display / Impact, 400 weight)
3. **Google Sans Flex** *(via Plus Jakarta Sans)* (Modern Geometric)
4. **Stack Sans Notch** *(via Space Grotesk)* (Futuristic Display)

### 📝 Body Text Fonts
1. **Google Sans** *(via Plus Jakarta Sans)* (Clean Modern Sans)
2. **PT Serif Caption** (Classic Readable Serif, 400 weight)
3. **Stack Sans Text** *(via Space Grotesk)* (Tech Sans, 400 weight)

---

## 🚀 How to Use in Your Project

### 1. In Next.js App Router (`layout.tsx`)
Inject all font variables into your root HTML layout:

```tsx
import { fontLibraryVariables } from "@/font-library";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontLibraryVariables}>
      <body>{children}</body>
    </html>
  );
}
```

### 2. In Tailwind CSS (`tailwind.config.ts` or `globals.css`)
Reference font CSS variables directly:

```css
/* In CSS */
h1 {
  font-family: var(--font-playfair-display);
}

p {
  font-family: var(--font-pt-serif-caption);
}
```

---

## ➕ How to Add a New Font in the Future

Adding a new font takes less than 30 seconds:

### Step 1: Import the Font in `font-library/index.ts`
```ts
import { Roboto } from "next/font/google";

export const fontRoboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});
```

### Step 2: Register it in `fontLibrary` Object
```ts
export const fontLibrary = {
  headlines: { ... },
  body: {
    roboto: {
      name: "Roboto",
      font: fontRoboto,
      className: fontRoboto.className,
      variable: fontRoboto.variable,
      cssVariable: "var(--font-roboto)",
    },
  },
};
```

### Step 3: Add variable to `fontLibraryVariables` array
```ts
export const fontLibraryVariables = [
  // ... existing font variables
  fontRoboto.variable,
].join(" ");
```

That's it! The new font is automatically configured and ready to use everywhere.
