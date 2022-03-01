import { useState, useEffect } from "react";
import Footer from "../../src/components/footer/Footer";
import Header from "../../src/components/header/Header";
import ActivityFilters from "../../src/components/activity/ActivityFilters";
import ActivityList from "../../src/components/activity/ActivityList";
import Hero from "../../src/components/hero/Hero";

import dataActivity from "../../data/activity.json"

export default function Activity() {

    const [activityCards, setActivityCards] = useState([]);
    useEffect(() => {
        setActivityCards(dataActivity);
    }, []);


    const filtersObj = {
        sort: [
          { label: "Name (Ascending)", value: 1 },
          { label: "Name (Descending)", value: 2 },
        ],
        type: [
          { label: "Liked", value: 3 },
          {
            label: "Bought",
            value: 4,
          },
        ],
      }

    return(
        <div>
            <Header/>
            <Hero text='Activity'/>
            <ActivityFilters filters={filtersObj}/>
            <ActivityList items={activityCards}/>
            <Footer/>
        </div>
    )
}