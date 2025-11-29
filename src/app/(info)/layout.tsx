import Header from "@/src/components/layouts/header/header";

export default function InfoLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}
