import Header from "@/src/components/layouts/header/header";
import PageLayout from "@/src/components/layouts/page/page-layout";

export default function InfoLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <PageLayout>
                {children}
            </PageLayout>
        </>
    )
}
