import "../CreateEvent/EventCreateFormStyles.css";
import PlaceSearchInput from "./PlaceSearchInput";
import NamedFileUpload from "./NamedFileUpload";
import NameInput from "./NameInput";
import FooterRibbon from "../Common/FooterRibbon";
import { HiCollection } from "react-icons/hi";
import { MdAddPhotoAlternate } from "react-icons/md";
import { TbCalendarStats } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { IoDocumentsSharp } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

function EventCreationForm() {
    return (
        <>
            <div className="evfbackground">
                <div className="evfs">
                    {/* <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {(props) => ( */}
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="inah">
                            <HiCollection className="formlogo" />
                            <p className="inatbte">Basic Info</p>
                        </div>
                        <div className="inad">
                            <p>
                                Name your event and tell event-goers why they should come.
                                Add details that highlight what makes it unique.
                            </p>
                        </div>
                        <div className="inat">
                            <input type="text" name="evtTitle" className="evTitlet" placeholder="Event Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className="inat">
                            <input type="textarea" name="evtDescription" className="evDescpt" placeholder="Event Description" value={desc} onChange={(e) => setDesc(e.target.value)} />
                        </div>
                        <div className="inat">
                            <div className="tyst">Type :&nbsp;&nbsp;</div>
                            <div className="tyss">
                                <select name="evtType" className="evTypet" value={type} onChange={(e) => setType(e.target.value)} >
                                    <option value="trip">Trip</option>
                                    <option value="charity">Charity</option>
                                    <option value="sports">Sports</option>
                                    <option value="festival">Festival</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>


                        <div className="inah">
                            <MdAddPhotoAlternate className="formlogo" />
                            <p className="inatbte">Main Event Image</p>
                        </div>
                        <div className="inad">
                            <p>This is the first image attendees will see at the top of your listing.</p>
                        </div>
                        <div className="inat">
                            <input type="file" name="evtImage" className="evImaget" />
                        </div>

                        <div className="inah">
                            <TbCalendarStats className="formlogo" />
                            <p className="inatbte">Date and time</p>
                        </div>
                        <div className="inad">
                            <p>Tell event-goers when your event starts and ends so they can make plans to attend.</p>
                        </div>
                        <div className="inat">
                            <label for="myRadioId1" className="rsradio1">
                                <input type="radio" name="recsin" className="defr1" id="myRadioId1" value="rec" />
                                <div className="recsinr1"></div>
                                <div className="recsinvn">Reccurent Event</div>
                            </label>
                            <label for="myRadioId2" className="rsradio2">
                                <input type="radio" name="recsin" className="defr2" id="myRadioId2" value="sin" checked />
                                <div className="recsinr2"></div>
                                <div className="recsinvn">Single Event</div>
                            </label>
                        </div>
                        <div className="inad">
                            <p>Single event happens once and can last multiple days.</p>
                        </div>
                        <div className="inat">
                            <h4>Start</h4>
                            <input type="date" name="evImage" className="stenDate" onChange={(e) => setStartDate(e.target.value)} value={startDate} />
                            <input type="time" name="evImage" className="stenTime" onChange={(e) => setStartTime(e.target.value)} value={startTime} />
                        </div>
                        <div className="inat">
                            <h4>Ends</h4>
                            <input type="date" name="evImage" className="stenDate" onChange={(e) => setEndDate(e.target.value)} value={endDate} />
                            <input type="time" name="evImage" className="stenTime" onChange={(e) => setEndTime(e.target.value)} value={endTime} />
                        </div>

                        <div className="inah">
                            <CiLocationOn className="formlogo" />
                            <p className="inatbte">Location</p>
                        </div>
                        <div className="inad">
                            <p>Help people in the area discover your event and let attendees know where to show up.</p>
                        </div>

                        <div className="inat">
                            <label for="myRadioId1eV" className="rsradio1eV">
                                <input type="radio" name="evVenue" className="defr1eV" id="myRadioId1eV" value="Online" onChange={(e) => setLocationType(e.target.value)} />
                                <div className="recsinr1eV"></div>
                                <div className="recsinvneV">Online Event</div>
                            </label>
                            <label for="myRadioId2eV" className="rsradio2eV">
                                <input type="radio" name="evVenue" className="defr2eV" id="myRadioId2eV" value="Physical" checked onChange={(e) => setLocationType(e.target.value)} />
                                <div className="recsinr2eV"></div>
                                <div className="recsinvneV">Physical Event</div>
                            </label>
                        </div>
                        <div>
                            <PlaceSearchInput selectedPlaces={selectedPlaces} setSelectedPlaces={setSelectedPlaces} />
                        </div>


                        <div className="inah">
                            <IoDocumentsSharp className="formlogo" />
                            <p className="inatbte">Additional Documents</p>
                        </div>
                        <div className="inad">
                            <p>Help people in the area discover your event and let attendees know where to show up.</p>
                        </div>
                        <div className="inat">
                            <NamedFileUpload />
                        </div>


                        <div className="inah">
                            <BsFillPersonFill className="formlogo" />
                            <p className="inatbte">Add committee members</p>
                        </div>
                        <div className="inad">
                            <p>Help people in the area discover your event and let attendees know where to show up.</p>
                        </div>
                        <div className="inat">
                            <NameInput namesList={namesList} setNamesList={setNamesList} />
                        </div>
                        <div className="inSbDiv">
                            <input type="submit" value="Create Event" className="sbmtFrmBtn" />
                        </div>
                    </form>
                    {/* )}
                     </Formik> */}
                </div>
                <FooterRibbon />
            </div>
        </>
    )
}

export default EventCreationForm;