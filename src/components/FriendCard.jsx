import { Link } from "react-router-dom";

 
const THEME_MAP = {
  overdue: "bg-red-500 text-white",
  "almost due": "bg-yellow-500 text-white",
  fallback: "bg-green-700 text-white",
};

const FriendCard = ({ friend }) => {
  
  const { id, name, picture, days_since_contact, status, tags } = friend;

 
  const activeStatusStyle = THEME_MAP[status] || THEME_MAP.fallback;

  return (
    <Link 
      to={`/friend/${id}`} 
      className="group block no-underline"
    >
      <article className="rounded-2xl border border-slate-700 bg-slate-800 p-6 text-center transition-all duration-300 hover:scale-[1.02] hover:border-slate-500">
        <figure className="mb-4">
          <img
            src={picture}
            alt={`${name}'s profile`}
            className="mx-auto h-24 w-24 rounded-full object-cover ring-2 ring-slate-700"
          />
        </figure>

        <h3 className="mb-2 text-2xl font-bold text-white">
          {name}
        </h3>

        <p className="mb-3 text-slate-400">
          {days_since_contact}d ago
        </p>

         <div className="mb-3 flex flex-wrap justify-center gap-2">
          {tags && tags.map((label, idx) => (
            <span
              key={`${id}-tag-${idx}`}
              className="rounded-full bg-green-200 px-3 py-1 text-sm font-medium text-green-900"
            >
              {label}
            </span>
          ))}
        </div>

         <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${activeStatusStyle}`}>
          {status}
        </span>
      </article>
    </Link>
  );
};

export default FriendCard;