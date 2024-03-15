import NavBar from "@/components/NavBar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>

        <NavBar />

        <div className="p-2 w-full">{children}</div>
        
      </div>
    </div>
  );
}
