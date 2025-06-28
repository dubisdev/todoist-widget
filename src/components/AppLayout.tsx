import { ReactNode } from "react";
import { BottomBar } from "./BottomBar";

interface AppLayoutProps {
    children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
    return (
        <div className="bg-transparent rounded-lg h-screen relative border-t-6 border-b-1 border-l-4 border-x-4 border-border cursor-grab" data-tauri-drag-region>
            {/* Main content area */}
            <div className="flex flex-col gap-1 h-full pointer-events-auto rounded-lg cursor-auto overflow-hidden">
                <main className="grow overflow-y-auto border-0 rounded-lg scroll-mt-1">
                    {children}
                </main>
                <BottomBar />
            </div>
        </div>
    );
};
