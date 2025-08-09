import { deleteSnippet } from "@/actions";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import React from "react";

const SnippetDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = parseInt((await params).id);

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const snippet = await prisma.snippet.findUnique({
    where: {
      id: id,
    },
  });

  if (!snippet) notFound();

  const deleteSnippetAction = deleteSnippet.bind(null, id);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xl">{snippet.title}</h1>
        <div className="flex items-center gap-2">
          <Link href={`/snippet/${snippet.id}/edit`}>
            <Button>Edit</Button>
          </Link>
          <form action={deleteSnippetAction}>
            <Button variant={"destructive"} type="submit">
              delete
            </Button>
          </form>
        </div>
      </div>
      <pre className="bg-gray-200 p-4 rounded-md my-2">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
};

export default SnippetDetailPage;
