import { Dashboard } from "@/components/Dashboard";
import { SideBar } from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="flex items-center bg-zinc-50 h-full">
      <SideBar/>
      <Dashboard/>
    </main>
  );
}
