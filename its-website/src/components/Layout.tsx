export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen 2xl:w-full w-[90%] mx-auto max-w-screen-2xl text-white">
      {children}
    </div>
  );
};
