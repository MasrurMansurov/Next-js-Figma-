import Link from "next/link"
import { ArrowRight, CheckCircle2, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col p-[0px_10px]">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="hidden font-bold sm:inline-block">Hello.io</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#features" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Features
              </Link>
              <Link href="#testimonials" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Testimonials
              </Link>
              <Link href="#pricing" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Pricing
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <Button variant="ghost" className="font-medium">
              Sign in
            </Button>
            <Button>
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container space-y-6 py-24 sm:py-32">
          <div className="mx-auto flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">Build your next idea even faster</h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Quickly build modern apps with our intuitive platform. Ship faster and delight your users with exceptional
              experiences.
            </p>
            <div className="space-x-4">
              <Button size="lg" className="font-medium">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Learn more
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container space-y-6 py-8 dark:bg-transparent md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Features</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Our platform offers everything you need to build your next big idea.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title}>
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Testimonials</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Here&apos;s what our customers have to say about us.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name}>
                <CardHeader>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{testimonial.text}</p>
                  <p className="mt-4 font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Simple, transparent pricing</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Choose the plan that&apos;s right for you
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl justify-center gap-6 sm:grid-cols-2 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <Card key={plan.name} className={plan.featured ? "border-primary" : ""}>
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-6 w-full" variant={plan.featured ? "default" : "outline"}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <a href="#" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">
              Hello.io
            </a>
            . The source code is available on{" "}
            <a href="#" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">
              GitHub
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  )
}

const features = [
  {
    title: "Fast Development",
    description: "Build and deploy quickly with our intuitive tools and components.",
  },
  {
    title: "Modern Stack",
    description: "Built with the latest technologies to ensure optimal performance.",
  },
  {
    title: "Great DX",
    description: "Developer experience is our top priority with great documentation.",
  },
  {
    title: "Accessible",
    description: "All components follow WAI-ARIA guidelines for maximum accessibility.",
  },
  {
    title: "Perfect Lighthouse",
    description: "Optimized for perfect Lighthouse scores and great SEO results.",
  },
  {
    title: "Type Safe",
    description: "Written in TypeScript for better development experience.",
  },
]

const testimonials = [
  {
    name: "Alice Johnson",
    title: "Frontend Developer",
    text: "This platform has revolutionized how we build applications. The development speed is incredible!",
  },
  {
    name: "Bob Smith",
    title: "CTO",
    text: "The best investment we've made for our development team. The ROI has been incredible.",
  },
  {
    name: "Carol Williams",
    title: "Product Manager",
    text: "Our team's productivity has increased significantly since we started using this platform.",
  },
]

const pricingPlans = [
  {
    name: "Hobby",
    price: "0",
    featured: false,
    features: ["1 project", "5 users", "Basic support", "Basic analytics"],
  },
  {
    name: "Pro",
    price: "49",
    featured: true,
    features: ["10 projects", "20 users", "Priority support", "Advanced analytics", "Custom domains"],
  },
  {
    name: "Enterprise",
    price: "199",
    featured: false,
    features: [
      "Unlimited projects",
      "Unlimited users",
      "24/7 support",
      "Advanced analytics",
      "Custom domains",
      "Custom integrations",
    ],
  },
]

