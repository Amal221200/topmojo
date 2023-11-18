"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Tags = ({ categories }: { categories: { name: string, slug: string }[] }) => {
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null
    return (
        <div className="flex gap-1">
            {
                categories.map((category) => (
                    <Link key={category.slug} className="transition-colors text-link hover:text-[#f88c8c]" href={`/posts?categorySlug=${category.slug}`}>
                        #{category.slug}
                    </Link>
                ))
            }
        </div>
    );
}

export default Tags;