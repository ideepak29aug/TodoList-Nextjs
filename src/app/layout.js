import "./globals.css";

export const metadata = {
  title: "Todo List",
  description: "This is the TodoList created by Deepak Jangir",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}