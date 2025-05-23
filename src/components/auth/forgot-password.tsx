"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { forgotPasswordSchema } from "@/schemas/auth.schema";
import { FadeIn } from "@/components/animations/motion";
import { useState } from "react";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { ClipLoader } from "react-spinners";
import Link from "next/link"


export function ForgotPasswordForm() {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof forgotPasswordSchema>) => {
    console.log("Form Values:", values);

    setLoading(true); // Start loading
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
    setLoading(false); // Stop loading

    form.reset(); // Reset form
    toast.success("Email Sent", {
      description: `Sent email to ${values.email}`,
    });
  };

  return (
    <FadeIn>
      <div className="w-full flex flex-col items-center justify-center h-screen max-w-[400px] mx-auto gap-4 px-4">
        <h1 className="text-3xl italic font-bold">
          <span className="text-[#FB3F6C]">INKO</span>
          <span>MOKO</span>
        </h1>
        <h2 className="font-semibold text-2xl">Forgot Password?</h2>
        <p className="text-center text-[#FB3F6C]">Enter your email address to get the Password reset Link.</p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 w-full flex flex-col gap-3"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <ClipLoader
                    color="#fff"
                    loading={loading}
                    size={20}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                  Sending Mail
                </>
              ) : (
                "Password reset"
              )}
            </Button>
          </form>
        </Form>
        <Link href="/login" className="text-[#878787] font-semibold">Back to Login</Link>
      </div>
    </FadeIn>
  );
}
