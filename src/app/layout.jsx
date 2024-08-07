import { lato } from "@/ui/fonts";
import { cn } from "@/utils/cn";

export const metadata = {
  title: "Tmbu Cloud Shop",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn("", lato.className)}
      >
        {children}
      </body>
    </html>
  );
}
