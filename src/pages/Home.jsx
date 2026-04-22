import { useEffect, useState, useCallback } from "react";
import Banner from "../components/Banner";
import SummaryCards from "../components/SummaryCards";
import FriendCard from "../components/FriendCard";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
  const [friendList, setFriendList] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);

   
  const loadInitialData = useCallback(async () => {
    try {
      const response = await fetch("/friends.json");
      if (!response.ok) throw new Error("Network response was not ok");
      
      const result = await response.json();
      setFriendList(result);
    } catch (error) {
      console.error("Error retrieving friend data:", error);
    } finally {
      setPageLoading(false);
    }
  }, []);

  useEffect(() => {
    loadInitialData();
  }, [loadInitialData]);

   
  if (pageLoading) {
    return <LoadingSpinner />;
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <Banner />
      
     
      <SummaryCards friends={friendList} />

      
      <section className="mt-14">
        <h2 className="text-3xl font-bold text-white mb-8">Your Friends</h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {friendList.length > 0 && 
            friendList.map((individual) => (
              <FriendCard key={individual.id} friend={individual} />
            ))
          }
        </div>
      </section>
    </main>
  );
};

export default Home;