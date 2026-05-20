export default function Html({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* PWA MANIFEST */}
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>

      <body>{children}</body>
    </html>
  );
}