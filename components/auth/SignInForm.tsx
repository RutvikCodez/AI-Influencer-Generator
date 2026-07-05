"use client";
import * as z from "zod";
import Link from "next/link";
import { Eye, EyeOff, } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { signInFields, signInFormSchema } from "@/constants";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof signInFormSchema>) => {
    console.log(values);
  };

  return (
    <Card className="w-full flex h-full justify-center bg-transparent border-none">
      <CardHeader className="flex flex-col gap-2 text-center">
        <CardTitle className="text-2xl font-semibold">
          Welcome Back
        </CardTitle>

        <CardDescription>
          Sign in to access your AI workspace.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form
          id="sign-in-form"
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          <FieldGroup className="flex flex-col gap-5">
            {signInFields.map(({ name, label, placeholder, icon: Icon, type }) => (
              <Controller
                key={name}
                name={name}
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={name}>{label}</FieldLabel>

                    <div className="relative">
                      <Icon className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                      <Input
                        {...field}
                        id={name}
                        placeholder={placeholder}
                        autoComplete={name}
                        type={
                          name === "password"
                            ? showPassword
                              ? "text"
                              : "password"
                            : type
                        }
                        className={
                          name === "password"
                            ? "pl-10 pr-10"
                            : "pl-10"
                        }
                      />

                      {name === "password" && (
                        <button
                          type="button"
                          onClick={() =>
                            setShowPassword((prev) => !prev)
                          }
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-opacity hover:opacity-80"
                        >
                          {showPassword ? (
                            <EyeOff className="size-4" />
                          ) : (
                            <Eye className="size-4" />
                          )}
                        </button>
                      )}
                    </div>

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            ))}
          </FieldGroup>

          <div className="flex justify-end">
            <Link
              href="/forgot-password"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Forgot password?
            </Link>
          </div>
        </form>
      </CardContent>

      <CardFooter className="flex flex-col gap-5 bg-transparent">
        <Button
          form="sign-in-form"
          type="submit"
          size="lg"
          className="w-full"
        >
          Sign In
        </Button>

        <div className="relative w-full">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>

          <div className="relative flex justify-center">
            <span className="bg-background px-3 text-xs text-muted-foreground uppercase">
              Or continue with
            </span>
          </div>
        </div>

        <Button
          variant="outline"
          size="lg"
          className="w-full gap-2 items-center flex"
        >
          <Image alt="Google Logo" src={"/google.svg"} width={20} height={20} />

          Continue with Google
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-foreground hover:underline"
          >
            Create one
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};
export default SignInForm;