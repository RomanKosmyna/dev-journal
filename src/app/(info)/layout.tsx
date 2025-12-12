import Header from "@/src/components/layouts/header/header";
import DocsLayout from "@/src/components/layouts/docs/docs-layout";
import Background from "@/src/components/ui/background/background";

export default function InfoLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Background>
                <Header />
                <DocsLayout>
                    {children}
                </DocsLayout>
            </Background>
        </>
    )
}
