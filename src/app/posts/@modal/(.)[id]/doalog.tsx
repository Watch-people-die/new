import Modal from "@/component/modal/modal";

type Post = {
  id: string;
  title: string;
  author: string;
  date: string;
  tags: string[];
  content: string;
  likes: number;
};

type Props = {
  post?: Post;
};

export default function Dialog({ post }: Props) {
  return (
    <Modal>
      <div className="bg-black py-4 px-4 rounded shadow">
        <h3><strong>Title:</strong> intercepting page</h3>
        <h3><strong>Title:</strong> {post?.title}</h3>
        <h3><strong>Author:</strong> {post?.author}</h3>
        <h3><strong>Date:</strong> {post?.date}</h3>
        <h3><strong>Tags:</strong> {post?.tags.join(', ')}</h3>
        <h3><strong>Likes:</strong> {post?.likes}</h3>
        <p className="mt-2">{post?.content}</p>
      </div>
    </Modal>
  );
}
