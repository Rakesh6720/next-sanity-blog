import { RichTextComponents } from "@/components/RichTextComponents";
import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

interface Props {
    params: { slug: string };
}

export default async function Page({ params }: Props) {
    const page = await getPage(params.slug);

    return (
        <div>
            <h1 className="text-5xl font-extrabold drop-shadow">{page.title}</h1>
            <div className="text-lg text-gray-700 mt-10">
                <article className="prose lg:prose-xl">
                    <PortableText value={page.content} components={RichTextComponents} />
                </article>
            </div>
        </div>
    )
}