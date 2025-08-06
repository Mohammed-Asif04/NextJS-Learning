import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';
import React from 'react'

const CreatesnippetPage = () => {

    async function Create(formData: FormData) {
        "use server" // use server directive
        const title = formData.get('title') as string;
        const code = formData.get('code') as string;

        const snippet = await prisma.snippet.create({
            data: {
                code: code,
                title: title,
            },
        });
        console.log("created snippet", snippet);

        redirect("/");
    }

    return (
        <form action={Create}>
            <div>
                <Label className='my-3'>Title</Label>
                <Input type='text' name='title' id='title' />
            </div>
            <div>
                <Label className='my-3'>Code</Label>
                <Textarea name='code' id='code' />
            </div>
            <Button type='submit' className='my-6'>New</Button>
        </form>
    )
}

export default CreatesnippetPage;