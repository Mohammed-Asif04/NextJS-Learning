"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { prisma } from "@/lib/prisma";
import { Create } from "@/actions";
import React, { useActionState } from "react";

const CreatesnippetPage = () => {
  const [formStateData, formdata] = useActionState(Create, { message: "" });

  return (
    <form action={formdata}>
      <div>
        <Label className="my-3">Title</Label>
        <Input type="text" name="title" id="title" />
      </div>
      <div>
        <Label className="my-3">Code</Label>
        <Textarea name="code" id="code" />
      </div>
      <div>
        {formStateData.message && (
          <div className="p-2 bg-red-300 border-2 border-red-600 mt-4">
            {formStateData.message}
          </div>
        )}
      </div>
      <Button type="submit" className="my-6">
        New
      </Button>
    </form>
  );
};

export default CreatesnippetPage;
