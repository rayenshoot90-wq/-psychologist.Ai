import './globals.css';

export const metadata = {
  title: 'المستمع الذكي - مساحتك الخاصة للحديث',
  description: 'موقع محادثة تفاعلي مع شخصية افتراضية داعمة بالذكاء الاصطناعي',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-slate-950 text-slate-100 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}