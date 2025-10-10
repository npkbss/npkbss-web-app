"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  // CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Toaster, toast } from "sonner";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";

export default function Test() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whatsappNumber = "+1234567890";
  const defaultMessage =
    "Hi! I'd like to know more about your business automation services.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber.replace(
      /[^0-9]/g,
      ""
    )}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <h1 className="text-3xl font-bold bg-blue-500 text-white underline md:text-5xl border border-slate-200">
        Hello world!
      </h1>

      <header className="sticky top-0 z-50 bg-white shadow-soft border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <div>
                <div className="font-semibold text-foreground">
                  NPK Business
                </div>
                <div className="text-xs text-muted-foreground">Solutions</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-smooth"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-foreground hover:text-primary transition-smooth"
              >
                About
              </Link>
              <div className="relative group">
                <button className="flex items-center text-foreground hover:text-primary transition-smooth">
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-medium rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link
                    href="/services/power-bi"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-muted"
                  >
                    Power BI Services
                  </Link>
                  <Link
                    href="/services/tally-prime"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-muted"
                  >
                    Tally Prime Implementation
                  </Link>
                  <Link
                    href="/services/zoho-analytics"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-muted"
                  >
                    Zoho Analytics
                  </Link>
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-sm font-medium text-primary hover:bg-muted"
                  >
                    View All Services
                  </Link>
                </div>
              </div>
              <Link
                href="/products"
                className="text-foreground hover:text-primary transition-smooth"
              >
                Products
              </Link>
              <Link
                href="/gallery"
                className="text-foreground hover:text-primary transition-smooth"
              >
                Gallery
              </Link>
            </nav>

            {/* Contact Actions */}
            <div className="hidden md:flex items-center space-x-3">
              <Button variant="ghost" size="sm" asChild>
                <a href="tel:+1234567890" className="flex items-center">
                  <Phone className="h-4 w-4 mr-1" />
                  Call Us
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="mailto:info@npkbusiness.com"
                  className="flex items-center"
                >
                  <Mail className="h-4 w-4 mr-1" />
                  Email
                </a>
              </Button>
              <Button asChild>
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <nav className="flex flex-col space-y-2">
                <Link
                  href="/"
                  className="py-2 text-foreground hover:text-primary transition-smooth"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="py-2 text-foreground hover:text-primary transition-smooth"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="py-2 text-foreground hover:text-primary transition-smooth"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/products"
                  className="py-2 text-foreground hover:text-primary transition-smooth"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Products
                </Link>
                <Link
                  href="/gallery"
                  className="py-2 text-foreground hover:text-primary transition-smooth"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gallery
                </Link>
                <div className="pt-2 border-t border-border">
                  <Button className="w-full" asChild>
                    <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                      Get a Quote
                    </Link>
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <Card className="w-full max-w-sm bg-amber-50">
        <CardHeader>
          <CardTitle>Login href your account</CardTitle>
          <CardDescription>
            Enter your email below href login href your account
          </CardDescription>
          {/* <CardAction> */}
          <Button variant="link">Sign Up</Button>
          {/* </CardAction> */}
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Login
          </Button>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </CardFooter>
      </Card>

      {/* Dialog Test */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="bg-green-500 m-4 p-4 text-3xl ">
            Open Dialog
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Hello from Dialog 👋</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground">
            This confirms Dialog + Animations are working!
          </p>
        </DialogContent>
      </Dialog>
      <Button onClick={() => toast.success("Shadcn Button Works! 🎉")}>
        Click Me
      </Button>
      <Toaster richColors position="top-right" />

      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand & Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">N</span>
                </div>
                <div>
                  <div className="font-semibold">NPK Business</div>
                  <div className="text-xs opacity-90">Solutions</div>
                </div>
              </div>
              <p className="text-sm opacity-90 leading-relaxed">
                Simplifying finance and operations for SMEs through practical
                automation, clean accounting, and actionable dashboards.
              </p>
              <div className="flex space-x-3">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary-foreground hover:text-accent"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary-foreground hover:text-accent"
                >
                  <Twitter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Services</h4>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="/services/power-bi"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-smooth"
                >
                  Power BI Services
                </Link>
                <Link
                  href="/services/tally-prime"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-smooth"
                >
                  Tally Prime Implementation
                </Link>
                <Link
                  href="/services/zoho-analytics"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-smooth"
                >
                  Zoho Analytics
                </Link>
                <Link
                  href="/services"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-smooth"
                >
                  API Integrations
                </Link>
                <Link
                  href="/services"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-smooth"
                >
                  Accounting Services
                </Link>
              </nav>
            </div>

            {/* Products */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Products</h4>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="/products"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-smooth"
                >
                  Zoho One
                </Link>
                <Link
                  href="/products"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-smooth"
                >
                  Tally Add-ins
                </Link>
                <Link
                  href="/products"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-smooth"
                >
                  Excel Add-ins
                </Link>
                <Link
                  href="/products"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-smooth"
                >
                  Power BI Templates
                </Link>
                <Link
                  href="/products"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-smooth"
                >
                  Custom Applications
                </Link>
              </nav>
            </div>

            {/* Contact & Newsletter */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="h-4 w-4 opacity-75" />
                  <a
                    href="tel:+1234567890"
                    className="hover:text-accent transition-smooth"
                  >
                    +1 (234) 567-8900
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Mail className="h-4 w-4 opacity-75" />
                  <a
                    href="mailto:info@npkbusiness.com"
                    className="hover:text-accent transition-smooth"
                  >
                    info@npkbusiness.com
                  </a>
                </div>
                <div className="flex items-start space-x-2 text-sm">
                  <MapPin className="h-4 w-4 opacity-75 mt-1" />
                  <span className="opacity-90">
                    Business District
                    <br />
                    City, State 12345
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-sm mb-2 opacity-90">
                  Subscribe href our newsletter
                </p>
                <div className="flex space-x-2">
                  <Input
                    type="email"
                    placeholder="Enter email"
                    className="bg-primary-foreground text-foreground text-sm"
                  />
                  <Button variant="secondary" size="sm">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
              <p className="text-sm opacity-75">
                © 2024 NPK Business Solutions. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <Link
                  href="/privacy"
                  className="opacity-75 hover:opacity-100 hover:text-accent transition-smooth"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="opacity-75 hover:opacity-100 hover:text-accent transition-smooth"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <button
        onClick={handleWhatsAppClick}
        className="whatsapp-float group"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
      </button>
    </>
  );
}
