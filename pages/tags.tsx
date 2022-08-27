import type { GetStaticProps } from "next";
import { getAllMdx } from "@/lib/mdx";
import Router from "next/router";

interface TagsProps {
  tags: string[];
}

const Tags = ({ tags }: TagsProps) => {
  return (
    <div className="flex flex-wrap gap-4 mt-4">
      {tags.map((tag) => (
        <div
          className="cursor-pointer w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          key={tag}
          onClick={() => Router.push(`posts/tagged/${tag}`)}
        >
          #{tag}
        </div>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const mdxFiles = getAllMdx().map((post) => post["frontMatter"]);

  const tags = mdxFiles.map((file) => file.tags).flat();

  return {
    props: {
      tags,
    },
  };
};

export default Tags;
