import '../index.css'
const Team = () => {
  const people = [
    {
      name: 'Salman Qais BuAli',
      role: 'Full Stack Developer',
      imageUrl:
        'https://media.licdn.com/dms/image/D4D03AQGZxI6SzZ3ySA/profile-displayphoto-shrink_400_400/0/1708516697164?e=1715212800&v=beta&t=KlBsFPI4z0-L5Zx1634oXIicLq4ES_sfw-iOC9sibEY',
        // 'https://ca.slack-edge.com/T03JBCX8WE7-U06CHA3U8LU-8750881d39fe-512',
      linkedinUrl: 'https://www.linkedin.com/in/salman-qais-buali/'
    },
    {
      name: 'Ali Elsayed Ali',
      role: 'Full Stack Developer',
      imageUrl:
        'https://media.licdn.com/dms/image/C4D03AQHumkcxFJD7ow/profile-displayphoto-shrink_400_400/0/1613063315204?e=1715212800&v=beta&t=INDOzFlob9XmKzncV_mD0iY-iDW93fIbASri-AcSAPA',
        // 'https://ca.slack-edge.com/T03JBCX8WE7-U06CTQ4DXNV-610b6bca815e-192',
      linkedinUrl: 'https://www.linkedin.com/in/ali-elamir/'
    },
    {
      name: 'Ahmed RAli',
      role: 'Full Stack Developer',
      imageUrl:
        'https://ca.slack-edge.com/T03JBCX8WE7-U06CV97QKA5-85b0036373d4-512',
      linkedinUrl: 'https://www.linkedin.com/in/ahmeddshabbir/'
    }
  ]
  return (
    <div className="bg-gray-900 py-4 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Meet the developers
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            Fueled by a passion for building dynamic websites. Using MongoDB's
            flexible data storage, Express's efficient backend framework,
            React's intuitive functional component based interfaces, and
            Node.js's versatile runtime environment. The MERN stack isn't just a
            set of tools, it's a playground where creativity meets efficiency,
            allowing us to bring innovative applications to life.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
          {people.map((person) => (
            <li
              key={person.name}
              className="rounded-2xl bg-gray-800 px-8 py-10"
            >
              <img
                className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">
                {person.name}
              </h3>
              <p className="text-sm leading-6 text-gray-400">{person.role}</p>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                  <a
                    href={person.linkedinUrl}
                    className="text-gray-400 hover:text-gray-300"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Team
