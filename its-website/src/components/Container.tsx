interface Props {
  className?: string;
  children: React.ReactNode;
}

export const Container = ({ className, children }: Props) => {
  return (
    <div className={`2xl:w-full w-[90%] mx-auto max-w-screen-xl ${className}`}>
      {children}
    </div>
  );
};
