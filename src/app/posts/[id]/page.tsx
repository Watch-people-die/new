import { posts } from "../page";

export default async function PhotoPage({
    params,
}: {
    params: { id: string };
}) {
    const { id } = await params;
    const post = posts.find((p) => p.id === id);

    return (
        <div className="container mx-auto my-10">
            <div className="w-1/2 mx-auto">
                <div className="bg-black py-4 px-4 rounded shadow">
                    <h3><strong>Title:</strong> {post?.title}</h3>
                    <h3><strong>Author:</strong> {post?.author}</h3>
                    <h3><strong>Date:</strong> {post?.date}</h3>
                    <h3><strong>Tags:</strong> {post?.tags.join(', ')}</h3>
                    <h3><strong>Likes:</strong> {post?.likes}</h3>
                    <p className="mt-2">{post?.content}</p>
                </div>
            </div>
        </div>
    );
}
