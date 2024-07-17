const files = [
  {
    title: 'Programming my bingo application',
    source:
      '/bingoapp.png',
    demoHref:"https://triplejingle.nl/event/bingo/bingocard/detail?bingocardId=1&eventId=1",
    demoDescription:"Click here to view the development version."
  },
  {
    title: 'Gaming',
    source:
      'https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoHref:"",
    demoDescription:""
  },
  {
    title: 'Calisthenics',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    demoHref:"",
    demoDescription:""
  },
]
export default function AboutMeSection() {
  return (
    <div className=" pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="flex justify-center text-4xl font-bold tracking-tight text-black sm:text-6xl">About me</h2>
          <p className="mt-6 text-lg leading-8 text-black">
           My name is Djimaro Talahatu. I was born and raised in Apeldoorn and i still live here.
            <br/>
            My hobbies are:
          </p>
          <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {files.map((file,i) => (
              <li  key={i+file.source}>
                <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-yellow-500">
                  <img alt="" src={file.source} className="pointer-events-none object-cover " />
                </div>
                <p className="pointer-events-none  mt-2 block  text-sm font-medium text-black"> {file.title}</p>
                {file.demoHref?<a className={"mt-2 block  text-sm font-medium text-gray-500"} href={file.demoHref}>
                  {file.demoDescription}
                </a>:<></>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}