import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { PlusCircle } from 'lucide-react'
import React, {useState, UseEffect} from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

    function AddSkills() {
    const formSchema = z.object({
        skillName: z.string().min(1, {
            message: "This field is required",
        }).max(50,{
            message: "Nigga shing"
        })
        });
    
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            skillName : ""
        },
        });

    const onSubmit = (values) => {
        try {
            
        } catch (error) {
            toast.error("Network error");
            console.log("AddSkill.jsx => onSubmit(): " + error);
        }
        };

        return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                <Button><PlusCircle className="w-4 h-4 mr-2"/>Add Skills</Button>
                </DialogTrigger>
                <DialogContent  className="lg:w-1/4">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center"> Add Skill </DialogTitle>
                </DialogHeader>
                <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex justify-center items-center">
                    <div className="space-y-2 sm:space-y-3 w-full max-w-8xl">
                    <FormField
                        control={form.control}
                        name="skillName"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Skill Name</FormLabel>
                            <FormControl>
                            <Input placeholder="Enter Skill Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    </div>
                </div>
                <div className="flex flex-cols gap-2 justify-end mt-5">
                    <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="submit">Submit</Button>
                </div>
                </form>
            </Form>
                </DialogContent>
            </Dialog>
        </div>
    )
    }

    export default AddSkills