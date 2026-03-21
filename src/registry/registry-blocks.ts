import type { Registry } from "shadcn/schema";

export const blocks: Registry["items"] = [
  {
    name: "wheel-picker-block-01",
    type: "registry:block",
    registryDependencies: ["@elliee13/wheel-picker"],
    files: [
      {
        path: "examples/wheel-picker-demo.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "wheel-picker-block-02",
    type: "registry:block",
    dependencies: ["react-hook-form", "@hookform/resolvers", "zod"],
    registryDependencies: ["@elliee13/wheel-picker", "form", "button", "sonner"],
    files: [
      {
        path: "examples/wheel-picker-form-demo.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "work-experience-block-01",
    type: "registry:block",
    registryDependencies: ["@elliee13/work-experience"],
    files: [
      {
        path: "examples/work-experience-demo.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "slide-to-unlock-block-01",
    type: "registry:block",
    registryDependencies: ["@elliee13/slide-to-unlock", "@elliee13/use-sound"],
    files: [
      {
        path: "examples/slide-to-unlock-demo-01.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "slide-to-unlock-block-02",
    type: "registry:block",
    registryDependencies: ["@elliee13/slide-to-unlock"],
    files: [
      {
        path: "examples/slide-to-unlock-demo-02.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "slide-to-unlock-block-03",
    type: "registry:block",
    registryDependencies: ["@elliee13/slide-to-unlock"],
    files: [
      {
        path: "examples/slide-to-unlock-demo-03.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "testimonials-marquee-block-01",
    type: "registry:block",
    registryDependencies: ["@elliee13/testimonials-marquee"],
    files: [
      {
        path: "examples/testimonials-marquee-demo-01.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "testimonials-marquee-block-02",
    type: "registry:block",
    registryDependencies: ["@elliee13/testimonials-marquee"],
    files: [
      {
        path: "examples/testimonials-marquee-demo-02.tsx",
        type: "registry:component",
      },
    ],
  },
];
