import React from "react";
import SEO from "./seo";

export default function AppLayout({ children, title }) {
    return (
        <div>
            <SEO title={title} />
            {children}
        </div>
    );
}