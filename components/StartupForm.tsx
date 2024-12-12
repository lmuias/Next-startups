"use client"

import React, { useActionState, useState } from 'react'
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import MDEditor from '@uiw/react-md-editor';
import { Button } from './ui/button';
import { Send } from 'lucide-react';
import { formSchema } from '@/lib/validation';
import z from 'zod';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

const StartupForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pitch, setPitch] = useState("");
  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = async (prevState: any, formData: FormData) => {
    try {
      const formValues = {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        category: formData.get("category") as string,
        link: formData.get("link") as string,
        pitch,
      }
  
      await  formSchema.parseAsync(formValues);

      // const result = createIdea(prevState, formData, pitch);

      // if (result.status == "SUCCESS") {
      //   toast({
      //     title: "Success",
      //     description: 'Ypur startup pitch has been created successfully',
      //   });

      //   router.push(`/startups/${result.id}`)
      // }

      // return result;
      
    } catch (error) {
        if (error instanceof(z.ZodError)) {
          const fieldErrors = error.flatten().fieldErrors;

          setErrors(fieldErrors as unknown as Record<string, string>);

          toast({
            title: "Error",
            description: 'Please check your inputs and try again',
            variant: "destructive",
          });

          return { ...prevState, error: "Validation failed", status: "ERROR" };
        }

        toast({
          title: "Error",
          description: 'An unexpected error',
          variant: "destructive",
        });

        return {
          ...prevState,
          error: 'An unexpected error',
          status: "ERROR",
        }
    }
  };

  const [state, formAction, isPending] = useActionState(handleSubmit, {
    error: '',
    status: 'INITIAL',
  });  

  return (
    <form 
      action={formAction}
      className='startup-form'
    >
      <div>
        <label htmlFor="title" className='startup-form_label'>Title</label>
        <Input 
          name='title' 
          id='title' 
          className='startup-form_input' 
          required 
          placeholder='Startup Title'
        />

        {errors.title && <p className='startup-form_error'>{errors.title}</p>}
      </div>


      <div>
        <label htmlFor="description" className='startup-form_label'>Description</label>
        <Textarea 
          name="description" 
          id='description' 
          className='startup-form_textarea' 
          required 
          placeholder='Startup Description'
        />

        {errors.description && <p className='startup-form_error'>{errors.description}</p>}
      </div>


      <div>
        <label htmlFor="category" className='startup-form_label'>Category</label>
        <Input 
          name="category" 
          id='category' 
          className='startup-form_input' 
          required 
          placeholder='Startup Category(Tech, Health, Education...)'
        />

        {errors.category && <p className='startup-form_error'>{errors.category}</p>}
      </div>


      <div>
        <label htmlFor="link" className='startup-form_label'>Image URL</label>
        <Input 
          name='link' 
          id='link' 
          className='startup-form_input' 
          required 
          placeholder='Startup Image URL'
        />
        {errors.link && <p className='startup-form_error'>{errors.link}</p>}
      </div>

      <div data-color-mode="light">
        <label htmlFor="pitch" className='startup-form_label'>Pitch</label>
        <MDEditor 
          value={pitch} 
          onChange={(value) => setPitch(value as string)}
          id='pitch'
          preview='edit'
          height={300}
          style={{borderRadius: 20, overflow: 'hidden'}}
          textareaProps={{
            placeholder: 'Describe your idea here'
          }}
          previewOptions={{
            disallowedElements: ["style"],
          }}
        />

        {errors.pitch && <p className='startup-form_error'>{errors.pitch}</p>}
      </div>

      <Button 
        className='startup-form_btn text-white' 
        type='submit' 
        disabled={isPending}
      >
        {isPending ? 'Submitting...' : 'Submit'}
        <Send className='size-6 ml-2' />
      </Button>
    </form>
  )
}

export default StartupForm