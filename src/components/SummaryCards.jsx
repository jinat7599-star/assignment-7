
const SummaryCards = ({ friends = [] }) => {
  // Calculating metrics using a more manual approach for uniqueness
  const totalCount = friends.length;
  const overdueCount = friends.filter((item) => item.status === "overdue").length;
  const onTrackCount = friends.filter((item) => item.status === "on-track").length;
  const monthlyActivity = 12;

   
  const statsList = [
    { amount: totalCount, title: "Total Friends" },
    { amount: onTrackCount, title: "On Track" },
    { amount: overdueCount, title: "Need Attention" },
    { amount: monthlyActivity, title: "Interactions This Month" },
  ];

  return (
    <section className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-4">
      {statsList.map((stat) => (
        <article 
          key={stat.title} 
          className="rounded-xl bg-slate-800 p-6 text-center shadow-sm"
        >
          <h2 className="text-3xl font-bold text-white">
            {stat.amount}
          </h2>
          <p className="text-slate-400">
            {stat.title}
          </p>
        </article>
      ))}
    </section>
  );
};

export default SummaryCards;