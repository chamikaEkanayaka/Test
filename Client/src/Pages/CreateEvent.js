import React from "react";
import CommitteeRibbon from "../Components/Common/CommitteeRibbon";
import EventCreationForm from "../Components/CreateEvent/EventCreateForm";

function CreateEvent(){
    return(
        <>
            <CommitteeRibbon/>
            <EventCreationForm/>
        </>
    )
}

export default CreateEvent;