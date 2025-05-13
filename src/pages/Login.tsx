
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, User, Lock } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';
import ParticleBackground from '../components/ParticleBackground';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    setLoading(true);
    
    // Simulate login API call with setTimeout
    setTimeout(() => {
      // Mock successful authentication
      localStorage.setItem('moleculens_auth', JSON.stringify({
        user: { email: data.email, name: data.email.split('@')[0] },
        isAuthenticated: true
      }));
      
      toast({
        title: "Login successful!",
        description: "Welcome to MolecuLens XR",
      });
      
      setLoading(false);
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-moleculens-darker text-white flex flex-col">
      <ParticleBackground density={20} />
      
      {/* Header */}
      <header className="pt-6 px-6 flex items-center justify-between relative z-10">
        <Link to="/" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
          <ArrowLeft className="h-5 w-5" />
          <span>Back</span>
        </Link>
        
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2">
          <div className="h-4 w-4 bg-moleculens-primary rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">Secure Login</span>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12 relative z-10">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">
              <span className="gradient-text">Molecu</span>Lens XR
            </h1>
            <p className="text-white/70">Sign in to access augmented reality molecules</p>
          </div>
          
          <div className="card-glass p-8 backdrop-blur-xl">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-4 w-4" />
                          <Input 
                            placeholder="you@example.com" 
                            className="pl-10 bg-white/5 border-white/10" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-4 w-4" />
                          <Input 
                            type="password" 
                            placeholder="••••••••" 
                            className="pl-10 bg-white/5 border-white/10" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Alert className="bg-moleculens-primary/10 border-moleculens-primary/20">
                  <AlertDescription className="text-xs">
                    Demo mode: Any email and password (min 6 characters) will work
                  </AlertDescription>
                </Alert>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-moleculens-primary to-moleculens-secondary group"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Signing in...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Sign In
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </Button>
                
                <div className="text-center text-sm text-white/50">
                  <p>Don't have an account? <span className="text-moleculens-primary hover:underline cursor-pointer">Sign up</span></p>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
