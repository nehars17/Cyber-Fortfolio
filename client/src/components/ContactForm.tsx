import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSendMessage } from "@/hooks/use-portfolio";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Send, Terminal } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const { toast } = useToast();
  const sendMessageMutation = useSendMessage();

  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactValues) => {
    sendMessageMutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Message Transmitted",
          description: "Your communication has been securely logged. I will respond shortly.",
          className: "border-primary text-primary font-mono",
        });
        form.reset();
      },
      onError: (error: any) => {
        toast({
          title: "Transmission Failed",
          description: error.message,
          variant: "destructive",
        });
      },
    });
  };

  return (
    <div className="w-full max-w-md mx-auto bg-card p-8 rounded-xl border border-border shadow-2xl relative overflow-hidden">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 mb-6 text-muted-foreground border-b border-border pb-4">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
        </div>
        <div className="ml-4 font-mono text-xs opacity-50 flex items-center gap-1">
          <Terminal className="w-3 h-3" />
          <span>contact_me.sh</span>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-mono text-primary text-xs uppercase tracking-wider">
                  &gt; Enter Name
                </FormLabel>
                <FormControl>
                  <Input 
                    placeholder="_" 
                    {...field} 
                    className="bg-background border-border focus:border-primary font-mono"
                  />
                </FormControl>
                <FormMessage className="font-mono text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-mono text-primary text-xs uppercase tracking-wider">
                  &gt; Enter Email
                </FormLabel>
                <FormControl>
                  <Input 
                    type="email" 
                    placeholder="_" 
                    {...field} 
                    className="bg-background border-border focus:border-primary font-mono"
                  />
                </FormControl>
                <FormMessage className="font-mono text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-mono text-primary text-xs uppercase tracking-wider">
                  &gt; Enter Message
                </FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="_" 
                    {...field} 
                    className="bg-background border-border focus:border-primary font-mono min-h-[120px]"
                  />
                </FormControl>
                <FormMessage className="font-mono text-xs" />
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/80 text-black font-mono font-bold group"
            disabled={sendMessageMutation.isPending}
          >
            {sendMessageMutation.isPending ? "TRANSMITTING..." : (
              <span className="flex items-center gap-2">
                EXECUTE <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
