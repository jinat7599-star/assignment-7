import { useEffect, useState, useMemo } from "react";
import { FaPhone, FaMessage, FaVideo } from "react-icons/fa6";
import { getTimelineData } from "../utils/localStorage";

const CATEGORIES = ["All", "Call", "Text", "Video"];

const ICON_MAP = {
  Call: <FaPhone className="text-2xl text-green-400" />,
  Text: <FaMessage className="text-2xl text-blue-400" />,
  Video: <FaVideo className="text-2xl text-purple-400" />,
};

const Timeline = () => {
  const [activities, setActivities] = useState([]);
  const [filterBy, setFilterBy] = useState("All");

  // Initial data fetch
  useEffect(() => {
    const data = getTimelineData();
    setActivities(data || []);
  }, []);

 
  const displayItems = useMemo(() => {
    if (filterBy === "All") return activities;
    return activities.filter((entry) => entry.type === filterBy);
  }, [activities, filterBy]);

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Timeline</h1>

       
      <section className="mb-8">
        <select
          value={filterBy}
          onChange={(e) => setFilterBy(e.target.value)}
          className="bg-slate-800 text-white border border-slate-600 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-slate-500"
        >
          {CATEGORIES.map((label) => (
            <option key={label} value={label}>
              {label}
            </option>
          ))}
        </select>
      </section>

     
      <div className="space-y-5">
        {displayItems.length > 0 ? (
          displayItems.map((record) => (
            <article
              key={record.id}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-6 flex items-center gap-4 hover:border-slate-500 transition-colors"
            >
              <figure className="shrink-0">
                {ICON_MAP[record.type]}
              </figure>

              <div>
                <h3 className="text-xl font-semibold text-white">{record.title}</h3>
                <time className="text-slate-400">
                  {new Date(record.date).toLocaleDateString()}
                </time>
              </div>
            </article>
          ))
        ) : (
          <aside className="bg-slate-800 border border-slate-700 rounded-2xl p-8 text-center text-slate-400">
            No timeline entries yet.
          </aside>
        )}
      </div>
    </main>
  );
};

export default Timeline;