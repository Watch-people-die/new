"use client";
import React from "react";
import Link from "next/link";

type HomeWidgetProps = {
    data: Array<{ id: string | number; title: string }>;
};

export function PostsWidget({ data }: HomeWidgetProps) {

    return (
        <div>
            <h1>Posts Feed</h1>
            <ul>
                {data?.map((post, index) => (
                    <li key={index}>
                        <Link href={`/posts/${post.id}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
