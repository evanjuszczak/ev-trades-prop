
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface EmailFormProps {
  buttonText: string;
  placeholder?: string;
  onSubmit?: (email: string) => void;
  className?: string;
  variant?: "default" | "premium";
}

const EmailForm: React.FC<EmailFormProps> = ({ 
  buttonText, 
  placeholder = "Enter your email",
  onSubmit,
  className = "",
  variant = "default"
}) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (onSubmit) {
        onSubmit(email);
      } else {
        toast.success("Thank you! We'll be in touch soon.");
      }
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`flex flex-col sm:flex-row gap-3 w-full max-w-md ${className}`}
    >
      <Input
        type="email"
        placeholder={placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className={`flex-grow ${variant === "premium" ? "border-evtrades-gold/50 focus:border-evtrades-gold" : ""}`}
      />
      <Button 
        type="submit" 
        disabled={isLoading} 
        className={variant === "premium" ? "btn-primary" : "btn-secondary"}
      >
        {isLoading ? "Sending..." : buttonText}
      </Button>
    </form>
  );
};

export default EmailForm;
