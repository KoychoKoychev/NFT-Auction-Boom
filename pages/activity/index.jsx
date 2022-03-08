import { useState, useEffect } from "react";
import Footer from "../../src/components/footer/Footer";
import Header from "../../src/components/header/Header";
import ActivityFilters from "../../src/components/activity/ActivityFilters";
import ActivityList from "../../src/components/activity/ActivityList";
import Hero from "../../src/components/hero/Hero";

export default function Activity() {

    const [activity, setActivity] = useState([]);
    const [activityFilters, setActivityFilters] = useState(null);
    useEffect(async () => {
        const result = await fetch(process.env.apiUrl + '/activities')
        const activityData = await result.json();
        setActivity(activityData.activities);
        setActivityFilters(activityData.filters);
    }, []);

    return(
        <div>
            <Header/>
            <Hero text={'Activity'}/>
            {activityFilters!=null?
            <ActivityFilters filters={activityFilters}/>
            :null}
            <ActivityList items={activity}/>
            <Footer/>
        </div>
    )
}