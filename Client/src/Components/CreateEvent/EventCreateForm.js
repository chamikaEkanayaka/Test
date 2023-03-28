import React from "react";
import "../CreateEvent/EventCreateFormStyles.css";
import { HiCollection } from "react-icons/hi";
import { MdAddPhotoAlternate } from "react-icons/md";

function EventCreationForm(){
    return(
        <>
            <div class="evfbackground">
                <div class="evfs">
                    <form>
                        <div class="inah">
                            <HiCollection class="basicinfologo"/>
                            <p class="inatbte">Basic Info</p>
                        </div>
                        <div class="inad">
                            <p>
                                Name your event and tell event-goers why they should come.
                                Add details that highlight what makes it unique.
                            </p>
                        </div>
                        <div class="inat">
                            <input type="text" name="evTitle" class="evTitlet" placeholder="Event Title"></input>
                        </div>
                        <div class="inat">
                            <input type="textarea" name="evDescp" class="evDescpt" placeholder="Event Description"></input>
                        </div>
                        <div class="inat">
                            <div class="tyst">Type :&nbsp;&nbsp;</div>
                            <div class="tyss">
                                <select name="evType" class="evTypet">
                                    <option value="Trip">Trip</option>
                                    <option value="Charity">Charity</option>
                                    <option value="Sports">Sports</option>
                                    <option value="Festival">Festival</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>


                        <div class="inah">
                            <MdAddPhotoAlternate class="basicinfologo"/>
                            <p class="inatbte">Main Event Image</p>
                        </div>
                        <div class="inad">
                            <p>This is the first image attendees will see at the top of your listing.</p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EventCreationForm;