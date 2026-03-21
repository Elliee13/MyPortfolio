import { ArrowRight, Package } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Project Spotlight",
  description: "Selected product-oriented work and implementation highlights.",
};

const products = [
  {
    id: "custom-shopify-builder-system",
    name: "Custom Shopify Builder System",
    description:
      "A product customization workflow with real-time previews, artwork uploads, admin tooling, and Shopify checkout integration.",
    href: "/#projects",
    status: "Featured",
    tech: ["React", "TypeScript", "PHP", "MySQL", "Shopify API"],
    image: "",
  },
];

export default function ProductsPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Project Spotlight
          </h1>
          <p className="text-lg text-muted-foreground">
            Product-oriented work adapted from the portfolio project list
          </p>
        </div>

        <div className="grid gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-xl border bg-background transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div className="grid gap-6 p-8 md:grid-cols-3">
                <div className="flex items-center justify-center overflow-hidden rounded-lg bg-muted md:col-span-1">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="p-8">
                      <Package className="h-20 w-20 text-primary" />
                    </div>
                  )}
                </div>

                <div className="md:col-span-2">
                  <div className="mb-4 flex items-center gap-3">
                    <h2 className="text-2xl font-bold">{product.name}</h2>
                    <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-600 dark:text-green-400">
                      {product.status}
                    </span>
                  </div>

                  <p className="mb-4 text-muted-foreground">
                    {product.description}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {product.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border bg-muted px-2 py-1 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button asChild>
                    <Link href={product.href}>
                      View Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-xl border bg-muted/30 p-8 text-center">
          <h3 className="mb-2 text-xl font-semibold">
            More Case Studies Coming Soon
          </h3>
          <p className="text-muted-foreground">
            More portfolio-specific project pages can be added here later.
          </p>
        </div>
      </div>
    </div>
  );
}
