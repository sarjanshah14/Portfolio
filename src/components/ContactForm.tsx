"use client";
import { Check, ChevronRight, Loader2 } from "lucide-react";
import React, { useRef, useEffect, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/ace-input";
import { Textarea } from "./ui/ace-textarea";
import { cn } from "@/lib/utils";
import { useToast } from "./ui/use-toast";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [time, setTime] = useState("");

  const formRef = useRef<HTMLFormElement>(null);

  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    setTime(new Date().toLocaleString());
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Replace with your actual EmailJS Public Key
    const PUBLIC_KEY = "fGTHyXQM2r2YzGb3a";

    if (!PUBLIC_KEY) {
      toast({
        title: "Configuration Missing",
        description: "Please set your EmailJS Public Key in ContactForm.tsx",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    try {
      // service_id, template_id, form_current, public_key
      await emailjs.sendForm(
        "service_6rb3kkc",
        "template_u9ogeyf",
        formRef.current!,
        PUBLIC_KEY
      );

      toast({
        title: "Thank you!",
        description: "I'll get back to you as soon as possible.",
        variant: "default",
        className: cn("top-0 mx-auto flex fixed md:top-4 md:right-4"),
      });
      setLoading(false);
      setFullName("");
      setEmail("");
      setPhone("");
      setMessage("");
      // const timer = setTimeout(() => {
      //   router.push("/");
      //   clearTimeout(timer);
      // }, 1000);
    } catch (err: any) {
      console.error(err);
      toast({
        title: "Error",
        description: err.text || "Something went wrong! Please check the fields.",
        className: cn(
          "top-0 w-full flex justify-center fixed md:max-w-7xl md:top-4 md:right-4"
        ),
        variant: "destructive",
      });
    }
    setLoading(false);
  };
  return (
    <form ref={formRef} className="min-w-7xl mx-auto sm:mt-4" onSubmit={handleSubmit}>
      {/* Hidden input for time parameter in EmailJS template */}
      <input type="hidden" name="time" value={time} />

      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <LabelInputContainer>
          <Label htmlFor="fullname">Full name</Label>
          <Input
            id="fullname"
            name="name" // Updated to match {{name}}
            placeholder="Your Name"
            type="text"
            required
            value={fullName}
            onChange={(e: any) => setFullName(e.target.value)}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email" // Updated to match {{email}}
            placeholder="you@example.com"
            type="email"
            required
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
        </LabelInputContainer>
      </div>

      <div className="mb-4">
        <LabelInputContainer>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone" // Matches {{phone}}
            placeholder="+1 (555) 000-0000"
            type="tel"
            value={phone}
            onChange={(e: any) => setPhone(e.target.value)}
          />
        </LabelInputContainer>
      </div>

      <div className="grid w-full gap-1.5 mb-4">
        <Label htmlFor="content">Your Message</Label>
        <Textarea
          placeholder="Tell me about about your project,"
          id="content"
          name="message" // Matches {{message}}
          required
          value={message}
          onChange={(e: any) => setMessage(e.target.value)}
        />

      </div>
      <Button
        disabled={loading}
        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        type="submit"
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            <p>Please wait</p>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            Send Message <ChevronRight className="w-4 h-4 ml-4" />
          </div>
        )}
        <BottomGradient />
      </Button>
    </form>
  );
};

export default ContactForm;

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-brand to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent orange-400 to-transparent" />
    </>
  );
};
