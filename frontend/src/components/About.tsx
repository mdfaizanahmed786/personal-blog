export default function About() {
  return (
    <main className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 ">
        <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-6">
          <MountainIcon className="h-12 w-12" />
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Blogging for Everyone</h1>
          <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
           Our Blogging platform is designed to help you share your ideas, connect with others, and grow your audience. Whether you are a seasoned writer or just starting out, we have the tools you need to create a beautiful blog that stands out from the crowd.
          </p>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Mission and Values</h2>
            <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
              Our mission is to empower people to share their stories and ideas with the world. We believe that everyone has a unique perspective to offer, and we are committed to providing a platform that makes it easy for them to do so. Our values guide everything we do, from the features we build to the way we interact with our users.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="space-y-4 text-center">
              <LightbulbIcon className="mx-auto h-10 w-10 text-gray-500 dark:text-gray-400" />
              <h3 className="text-lg font-bold">Innovation</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We are constantly exploring new technologies and ideas to deliver cutting-edge solutions that give our
                clients a competitive edge.
              </p>
            </div>
            <div className="space-y-4 text-center">
              <ShieldIcon className="mx-auto h-10 w-10 text-gray-500 dark:text-gray-400" />
              <h3 className="text-lg font-bold">Integrity</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We are committed to the highest standards of ethical conduct, ensuring that our clients can trust us to
                deliver on our promises.
              </p>
            </div>
            <div className="space-y-4 text-center">
              <UsersIcon className="mx-auto h-10 w-10 text-gray-500 dark:text-gray-400" />
              <h3 className="text-lg font-bold">Customer-Centricity</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our clients are at the heart of everything we do. We work tirelessly to understand their needs and
                deliver solutions that exceed their expectations.
              </p>
            </div>
            <div className="space-y-4 text-center">
              <RocketIcon className="mx-auto h-10 w-10 text-gray-500 dark:text-gray-400" />
              <h3 className="text-lg font-bold">Passion</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We are passionate about our work and strive to inspire our clients with our enthusiasm and dedication to
                their success.
              </p>
            </div>
          </div>
        </div>
      </section>
  
    </main>
  )
}

function LightbulbIcon(props:IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  )
}

interface IconProps {
  className?: string;
  
}



function MountainIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function RocketIcon(props:IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}


function ShieldIcon(props:IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  )
}


function UsersIcon(props:IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}