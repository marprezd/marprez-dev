import '../styles/globals.css'
import localFont from 'next/font/local';
 
// Font files can be colocated inside of `app`
const Inter = localFont({
  src: './Inter.var.woff2',
  display: 'swap',
  variable: '--font-inter',
});

const Jetbrains = localFont({
  src: './jetbrains-mono-regular.woff2',
  display: 'swap',
  variable: '--font-jetbrains',
})
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en" className={`${Inter.variable} ${Jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
