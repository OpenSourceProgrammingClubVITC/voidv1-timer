interface SectionTitleProps {
  children: React.ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <div className="text-center mb-8">
      <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white relative inline-block">
        {children}
        <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></span>
      </h2>
    </div>
  );
}
