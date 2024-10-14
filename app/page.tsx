import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Globe, Smartphone, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Globe className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">Springloy Ventures</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#services">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#portfolio">
            Portfolio
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#team">
            Team
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1 justify-center items-center">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Innovative Software Solutions
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Springloy Ventures delivers cutting-edge software development services to bring your ideas to life.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="#contact">Get Started</Link>
                </Button>
                <Button variant="outline">
                  <Link href="#services">Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Code className="h-8 w-8 mb-2" />
                  <CardTitle>Custom Software Development</CardTitle>
                  <CardDescription>Tailored solutions to meet your unique business needs</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Globe className="h-8 w-8 mb-2" />
                  <CardTitle>Web Application Development</CardTitle>
                  <CardDescription>Responsive and scalable web applications</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Smartphone className="h-8 w-8 mb-2" />
                  <CardTitle>Mobile App Development</CardTitle>
                  <CardDescription>iOS and Android apps that engage users</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Zap className="h-8 w-8 mb-2" />
                  <CardTitle>API Development & Integration</CardTitle>
                  <CardDescription>Seamless integration of third-party services</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Code className="h-8 w-8 mb-2" />
                  <CardTitle>Cloud Solutions</CardTitle>
                  <CardDescription>Scalable and secure cloud infrastructure</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Globe className="h-8 w-8 mb-2" />
                  <CardTitle>UI/UX Design</CardTitle>
                  <CardDescription>Intuitive and engaging user experiences</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card key={item}>
                  <Image
                    alt={`Project ${item}`}
                    className="w-full h-48 object-cover"
                    height="200"
                    src={`https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800`}
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-2">Project {item}</h3>
                    <p className="text-sm text-gray-600">
                      A brief description of the project and the technologies used.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((member) => (
                <Card key={member}>
                  <CardContent className="p-4 flex flex-col items-center">
                    <Image
                      alt={`Team Member ${member}`}
                      className="rounded-full mb-4"
                      height="120"
                      src={`https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=800`}
                      style={{
                        aspectRatio: "120/120",
                        objectFit: "cover",
                      }}
                      width="120"
                    />
                    <h3 className="font-bold text-lg">John Doe</h3>
                    <p className="text-sm text-gray-600">Software Engineer</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Contact Us</h2>
            <div className="max-w-2xl mx-auto">
              <form className="space-y-4 flex justify-center flex-col">
                <input placeholder="Your Name" />
                <input placeholder="Your Email" type="email" />
                <textarea placeholder="Your Message" />
                <Button className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 Springloy Ventures. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}