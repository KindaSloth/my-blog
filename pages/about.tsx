import type { GetStaticProps, NextPage } from "next";
import { Page } from "@/components/Page";
import { Prose } from "@/components/Prose";
import { getAboutMeMdx } from "@/lib/mdx";
import { components } from "@/components/MDX";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypePrism from "rehype-prism-plus";

type AboutProps = {
  mdx: any;
};

const About: NextPage<AboutProps> = ({ mdx }: AboutProps) => {
  return (
    <>
      <Page title="About" description="This is a brief description about me.">
        <Prose>
          <MDXRemote {...mdx} components={components} />
        </Prose>
      </Page>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const mdxFile = getAboutMeMdx();

  const mdx = await serialize(mdxFile.content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypePrism],
    },
    scope: mdxFile.frontMatter,
  });

  return {
    props: {
      mdx,
    },
  };
};

export default About;
