import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
 
import { FaBoxArchive, FaTrash } from "react-icons/fa6";
import { LuAlarmClockCheck } from "react-icons/lu";
import callIcon from "../assets/icons/call.png";
import textIcon from "../assets/icons/text.png";
import videoIcon from "../assets/icons/video.png";

 
import { getTimelineData, saveTimelineData } from "../utils/localStorage";

const THEME_CONFIG = {
  overdue: "bg-red-500 text-white",
  "almost due": "bg-yellow-500 text-white",
  none: "bg-green-700 text-white",
};

const INTERACTION_MODES = [
  { label: "Call", img: callIcon },
  { label: "Text", img: textIcon },
  { label: "Video", img: videoIcon },
];

const FriendDetails = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [fetching, setFetching] = useState(true);

   
  const getProfileDetails = useCallback(async () => {
    try {
      const response = await fetch("/friends.json");
      const allFriends = await response.json();
      const currentFriend = allFriends.find((f) => f.id === parseInt(id));
      setProfile(currentFriend);
    } catch (error) {
      console.error("Profile load error:", error);
    } finally {
      setFetching(false);
    }
  }, [id]);

  useEffect(() => {
    getProfileDetails();
  }, [getProfileDetails]);

  const resolveStatusColor = (currentStatus) => {
    return THEME_CONFIG[currentStatus] || THEME_CONFIG.none;
  };

  const registerCheckIn = (mode) => {
    const logEntry = {
      id: Date.now(),
      friendName: profile.name,
      type: mode,
      title: `${mode} with ${profile.name}`,
      date: new Date().toISOString(),
    };

    const history = getTimelineData();
    saveTimelineData([logEntry, ...history]);
    toast.success(`${mode} recorded successfully!`);
  };

  if (fetching) {
    return (
      <main className="max-w-7xl mx-auto px-4 py-20 text-center text-slate-300 text-xl">
        Fetching profile data...
      </main>
    );
  }

  if (!profile) {
    return (
      <main className="max-w-7xl mx-auto px-4 py-20 text-center text-red-400 text-xl">
        Requested friend profile was not found.
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
      
       
      <aside className="space-y-4">
        <div className="bg-[#121A2B] border border-[#25324A] rounded-2xl p-8 text-center shadow-lg">
          <img
            src={profile.picture}
            alt={profile.name}
            className="w-28 h-28 rounded-full object-cover mx-auto mb-4 ring-2 ring-[#25324A]"
          />
          <h2 className="text-3xl font-bold text-white mb-3">{profile.name}</h2>
          <span className={`px-4 py-1 rounded-full text-sm font-semibold ${resolveStatusColor(profile.status)}`}>
            {profile.status}
          </span>
          <div className="flex flex-wrap justify-center gap-2 my-4">
            {profile.tags.map((tag, idx) => (
              <span key={idx} className="bg-[#1E293B] text-[#7CFFB2] px-3 py-1 rounded-full text-sm border border-[#25324A]">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-[#94A3B8] italic mb-3">"{profile.bio}"</p>
          <p className="text-[#94A3B8] text-sm opacity-80">{profile.email}</p>
        </div>

         
        <nav className="flex flex-col gap-3">
          <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-[#25324A] bg-[#1E293B] py-4 text-white transition hover:bg-[#2A3A55]">
            <LuAlarmClockCheck /> Snooze 2 Weeks
          </button>
          <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-[#25324A] bg-[#1E293B] py-4 text-white transition hover:bg-[#2A3A55]">
            <FaBoxArchive /> Archive
          </button>
          <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-red-500 bg-[#1E293B] py-4 text-red-400 transition hover:bg-red-500 hover:text-white">
            <FaTrash /> Delete
          </button>
        </nav>
      </aside>

       
      <section className="lg:col-span-2 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { val: profile.days_since_contact, label: "Days Since Contact" },
            { val: profile.goal, label: "Goal (Days)" },
            { val: profile.next_due_date, label: "Next Due" }
          ].map((stat, index) => (
            <div key={index} className="bg-[#121A2B] border border-[#25324A] rounded-2xl p-6 text-center">
              <h3 className={`${index === 2 ? 'text-2xl' : 'text-4xl'} font-bold text-[#7CFFB2] mb-2`}>{stat.val}</h3>
              <p className="text-[#94A3B8] text-sm uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#121A2B] border border-[#25324A] rounded-2xl p-6 flex items-start justify-between gap-4 shadow-sm">
          <div>
            <h3 className="text-3xl font-semibold text-[#7CFFB2] mb-3">Relationship Goal</h3>
            <p className="text-[#94A3B8] text-xl">
              Connect every <span className="font-bold text-white">{profile.goal} days</span>
            </p>
          </div>
          <button className="bg-[#1E293B] hover:bg-[#2A3A55] text-white px-5 py-2 rounded-lg border border-[#25324A]">Edit</button>
        </div>

        
        <div className="bg-[#121A2B] border border-[#25324A] rounded-2xl p-6">
          <h3 className="text-3xl font-semibold text-[#7CFFB2] mb-6">Quick Check-In</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {INTERACTION_MODES.map(({ label, img }) => (
              <button
                key={label}
                onClick={() => registerCheckIn(label)}
                className="group flex flex-col items-center gap-3 rounded-xl border border-[#25324A] bg-[#0F1B2D] py-8 text-white transition hover:bg-[#1E293B]"
              >
                <img src={img} alt={label} className="w-10 h-10 transition group-hover:scale-110" />
                <span className="text-xl font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default FriendDetails;