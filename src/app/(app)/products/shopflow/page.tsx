import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Detail",
  description:
    "Reserved route for a future dedicated project detail page.",
  openGraph: {
    title: "Project Detail",
    description: "Reserved route for a future dedicated project detail page.",
    type: "website",
  },
};

export default function ShopFlowPage() {
  return (
    <div className="mx-auto max-w-3xl py-20">
      <div className="rounded-xl border bg-background p-8">
        <h1 className="mb-3 text-3xl font-semibold">Project detail coming soon</h1>
        <p className="text-muted-foreground">
          This route belonged to the previous template product page and is now
          reserved for a future portfolio-specific case study.
        </p>
      </div>
    </div>
  );
}
