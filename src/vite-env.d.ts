// src/vite-env.d.ts
/// <reference types="vite/client" />

declare module "*.svg" {
    import * as React from "react";

    const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    export default content;
}

declare module "*.png" {
    const value: string;
    export default value;
}

declare module "*.jpg" {
    const value: string;
    export default value;
}

declare module "*.jpeg" {
    const value: string;
    export default value;
}

declare module "*.gif" {
    const value: string;
    export default value;
}

declare module "*.webp" {
    const value: string;
    export default value;
}

declare module "*.css" {
    const content: { [className: string]: string };
    export default content;
}

declare module "*.module.css" {
    const classes: { readonly [key: string]: string };
    export default classes;
}

declare module "*.scss" {
    const content: { [className: string]: string };
    export default content;
}

declare module "*.module.scss" {
    const classes: { readonly [key: string]: string };
    export default classes;
}

declare module "*.less" {
    const content: { [className: string]: string };
    export default content;
}

declare module "*.module.less" {
    const classes: { readonly [key: string]: string };
    export default classes;
}
