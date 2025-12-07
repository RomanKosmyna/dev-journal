import Header from "@/src/components/layouts/header/header";
import DocsLayout from "@/src/components/layouts/docs/docs-layout";

export default function InfoLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <DocsLayout>
                {children}
            </DocsLayout>
        </>
    )
}
