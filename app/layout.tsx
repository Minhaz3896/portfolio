import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://minhazur.netlify.app/"),

	title: 'Minhazur Rahman',
	authors: {
		name: "Minhazur Rahman",
	},

	description:
		"Minhazur Rahman Portfolio.",
	openGraph: {
		title: "Minhazur Rahman",
		description:
			"Minhazur Rahman Portfolio.",
		url: "https://minhazur.netlify.app/",
		siteName: "Minhazur Rahman",
		images: "/og.png",
		type: "website",
	},
	
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider></body>
    </html>
  );
}
