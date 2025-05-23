"use client";

import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/schemas/auth.schema";
import { FadeIn } from "@/components/animations/motion";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

export function LoginForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      keepMeSignedIn: false, // Added default value for the checkbox
    },
  });

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    console.log("Form Values:", values);
  
    setLoading(true); // Start loading
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
    setLoading(false); // Stop loading
  
    form.reset(); // Reset form
    toast.success("Logging In", {
      description: `Logged in as ${values.email}`
    });
  
    router.push("/dashboard");
  };
  

  return (
    <FadeIn>
      <Form {...form}>
        <div className="w-full h-screen flex flex-col items-center justify-center">
          <h1 className="text-3xl italic mb-8">
            <span className="font-bold">INKO</span>
            <span className="text-[#FB3F6C]">MOKO</span>{" "}
          </h1>

          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 w-full max-w-[400px] flex flex-col gap-3"
          >
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="omoshiroi@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Password</FormLabel>
                    <span className="text-sm text-[#FF698D]">
                      Forgot Password?
                    </span>
                  </div>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="keepMeSignedIn"
              control={form.control}
              render={({ field }) => (
                <FormItem className="flex items-center space-x-2">
                  <Checkbox
                    checked={field.value} // Use `checked` instead of `value`
                    onCheckedChange={field.onChange} // Map `onCheckedChange` to `onChange`
                    name={field.name} // Pass the name explicitly
                    ref={field.ref} // Pass the ref explicitly
                  />
                  <FormLabel>Keep me signed in</FormLabel>
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit" disabled={loading}>
              {loading ? (
                <>
                  <ClipLoader
                    color="#fff"
                    loading={loading}
                    size={20}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                  Logging In
                </>
              ) : (
                "Login"
              )}
            </Button>
          </form>
        </div>
      </Form>
    </FadeIn>
  );
}
