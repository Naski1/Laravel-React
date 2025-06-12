// components/my-tasks.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCheckCircle, faChevronDown, faCog } from '@fortawesome/free-solid-svg-icons'

export default function MyTasks() {
  return (
    <section className="bg-white rounded-3xl p-5 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-lg text-[#0f1f1e]">My Tasks</h2>
        <button
          aria-label="Add task"
          className="w-8 h-8 border border-[#cfd4db] rounded-full flex items-center justify-center text-[#0f1f1e] hover:bg-[#e6e9f0] transition"
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>

      <div className="flex gap-2">
        <button className="text-xs font-semibold bg-[#0f1f1e] text-white rounded-full px-3 py-1">Today</button>
        <button className="text-xs font-semibold border border-[#cfd4db] rounded-full px-3 py-1 text-[#0f1f1e] hover:bg-[#e6e9f0] transition">Tomorrow</button>
      </div>

      <button className="text-xs font-semibold border border-[#cfd4db] rounded-full px-3 py-1 text-[#0f1f1e] w-full text-left">
        <span>12</span> On Going Tasks
        <FontAwesomeIcon icon={faChevronDown} className="float-right" />
      </button>

      {/* Task cards */}
      {[
        {
          bg: '#fbe9e7',
          title: 'BrightBridge - Website Design',
          desc: 'Design a framer website with modern templates',
          img: '/img/rightBridge.png',
        },
        {
          bg: '#e3f0ff',
          title: 'Github - Upload Dev Files & Images',
          desc: 'Collaborate with Developers to handle the SaaS Project.',
          img: '/img/github.png',
        },
        {
          bg: '#ffe6f0',
          title: '9TDesign - Mobile App Prototype',
          desc: 'Ready prototype for testing user in this week.',
          img: '/img/9t.png',
        },
        {
          bg: '#e6f0ff',
          title: 'Horizon - Dashboard Design',
          desc: 'Design a dashboard comfortable with Vision Pro',
          img: '/img/Horizon.png',
        }
      ].map((task, idx) => (
        <article className="rounded-xl p-3 flex flex-col gap-1 cursor-pointer" style={{ backgroundColor: task.bg }}>
  <div className="flex items-center justify-between">
    <img src={task.img} className="w-8 h-8" alt="Task logo" />
    <div className="flex gap-2 items-center text-gray-400">
      <FontAwesomeIcon icon={faCheckCircle} />
    </div>
  </div>
  <h3 className="text-sm font-bold text-[#0f1f1e] leading-tight">{task.title}</h3>
  <p className="text-xs text-[#6b7280] leading-tight">{task.desc}</p>
</article>

      ))}
    </section>
  );
}
