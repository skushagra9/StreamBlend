import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { VideoIcon } from "@radix-ui/react-icons"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] justify-between">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center gap-x-2" href="/">
          <VideoIcon className="h-6 w-6" />
          <span className="font-bold text-xl text-tighter">StreamBlend</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#feature">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
        <div>
          <Button>
            Hello
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-36 md:py-44 lg:py-80">
          <div className="container flex flex-col items-center gap-4 px-4 md:px-6">
            <div className="space-y-3 text-center">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">New</div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl/none lg:text-6xl/none">
                Video Calls. Simplified.
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                SFU-Powered Video Calls for Crisp Communication - WebRTC, WebSockets, Node.js, NextJs,.              </p>
            </div>
            <div className="w-full max-w-3xl space-y-4">
              <form className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4 lg:gap-2">
                <Input className="max-[300px] w-full sm:flex-1" placeholder="Enter your email" type="email" />
                <Button type="submit">Sign Up</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Sign up to get notified when we launch.
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-36 md:py-24 lg:py-80">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                The Complete Platform for Video Calls
              </h2>
            </div>
            <div className="mx-auto w-full max-w-5xl grid gap-10 items-center sm:grid-cols-2 sm:gap-16 justify-center">
              {/* <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8"> */}
              {/*   <img */}
              {/*     alt="Image" */}
              {/*     className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center" */}
              {/*     height="310" */}
              {/*     src="/placeholder.svg" */}
              {/*     width="550" */}
              {/*   /> */}
              {/* </div> */}
              <div className=" ">
                <ul className="">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">SFU Technology</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Utilizes SFU (Selective Forwarding Unit) for efficient stream management.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">WebRTC</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Employs WebRTC for real-time communication capabilities.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Next.js</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Frontend development with Next.js for a responsive and interactive interface.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Node.js Backend</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Scalable and efficient server-side operations with Node.js.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">WebSocket Integration</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Real-time communication using WebSockets for enhanced connectivity.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">HD Video and Audio</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Crystal-clear video and audio quality for lifelike conversations.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Secure and Private</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Industry-standard encryption protocols for data privacy.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Cross-Platform Compatibility</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Seamless experience across desktop and mobile devices.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">User-Friendly Interface</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Intuitive design for easy call initiation and settings management.
                      </p>
                    </div>
                  </li>
                </ul>              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-36 md:py-44 lg:py-96 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Experience the workflow the best frontend teams love.
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Let your team focus on shipping features instead of managing infrastructure with automated CI/CD.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                <Button type="submit">Sign Up</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Sign up to get notified when we launch.
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>

      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 StreamBlend. All rights reserved.</p>
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


