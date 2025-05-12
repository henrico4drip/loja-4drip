export const metadata = {
  title: 'Loja 4DRIP',
  description: 'Controle de metas da Loja 4DRIP',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, padding: 0, background: '#0f172a', color: 'white' }}>
        {children}
      </body>
    </html>
  );
}
