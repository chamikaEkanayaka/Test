import React from "react";
import "../CreateEvent/EventCreateFormStyles.css";
import { HiCollection } from "react-icons/hi";
import { MdAddPhotoAlternate } from "react-icons/md";
import { TbCalendarStats } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";


function EventCreationForm(){
    return(
        <>
            <div class="evfbackground">
                <div class="evfs">
                    <form>
                        <div class="inah">
                            <HiCollection class="formlogo"/>
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
                            <MdAddPhotoAlternate class="formlogo"/>
                            <p class="inatbte">Main Event Image</p>
                        </div>
                        <div class="inad">
                            <p>This is the first image attendees will see at the top of your listing.</p>
                        </div>
                        <div class="inat">
                            <input type="file" name="evImage" class="evImaget"/>
                        </div>

                        <div class="inah">
                            <TbCalendarStats class="formlogo"/>
                            <p class="inatbte">Date and time</p>
                        </div>
                        <div class="inad">
                            <p>Tell event-goers when your event starts and ends so they can make plans to attend.</p>
                        </div>
                        <div class="inat">
                        <label for="myRadioId1" class="rsradio1">
                            <input type="radio" name="recsin" class="defr1" id="myRadioId1" value="rec"/>
                            <div class="recsinr1"></div>
                            <div class="recsinvn">Reccurent Event</div>
                        </label>
                        <label for="myRadioId2" class="rsradio2">
                            <input type="radio" name="recsin" class="defr2" id="myRadioId2" value="sin" checked/>
                            <div class="recsinr2"></div>
                            <div class="recsinvn">Single Event</div>
                        </label>
                        </div>
                        <div class="inad">
                            <p>Single event happens once and can last multiple days.</p>
                        </div>
                        <div class="inat">
                            <input type="date" name="evImage" class="stenDate"/>
                            <input type="time" name="evImage" class="stenTime"/>
                        </div>
                        <div class="inat">
                            <input type="date" name="evImage" class="stenDate"/>
                            <input type="time" name="evImage" class="stenTime"/>
                        </div>

                        <div class="inah">
                            <CiLocationOn class="formlogo"/>
                            <p class="inatbte">Location</p>
                        </div>
                        <div class="inad">
                            <p>Help people in the area discover your event and let attendees know where to show up.</p>
                        </div>
                        <div class="inat">
                            <input type="file" name="evImage" class="evImaget"/>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default EventCreationForm;