import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from '@/hooks/use-auth';
import Script from 'next/script'; // ✅ Import Next.js Script component

export const metadata: Metadata = {
  title: 'StudyFlow: Your Personal AI Guide to Mastering Any Subject',
  description: 'Generate personalized, step-by-step learning paths on any topic with StudyFlow. Go from beginner to expert with a structured, AI-powered course tailored just for you.',
  icons: {
    icon: '/lightly-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />

        {/* ✅ Add Umami tracking script */}
        <Script
          async
          src="https://your-umami-domain.com/script.js"
          data-website-id="YOUR-WEBSITE-ID"
        />
      </head>
      <body className="font-body antialiased">
        <AuthProvider>
          {children}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
