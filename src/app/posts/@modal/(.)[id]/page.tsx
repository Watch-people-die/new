import {posts} from "../../page";
import { redirect } from 'next/navigation';
import Dialog from "./doalog";

export default async function PostModal({
    params,
}: {
        params: { id: string }
}) {
    const { id } = await params;
    const post  =  await posts.find((p) => p.id === id)!;
    
    return (
        <Dialog post={post}/>
    );
}