import React, {useState} from "react";
import "../App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import MapComponent from "../components/MapComponent";
import "../components/MainPage.css";


function MainPage() {
  const [tableData, setTableData] = useState([{
    "photoId": 0,
    "entryName": "0th photo",
    "latitude": 5.0000,
    "longitude": 5.0000,
    "photoDescription": "0th photo's description.\n"
  }]);
  const [showManualAdditionModal, setShowManualAdditionModal] = useState(false);  //** NOTE: Used for alternate implmntatn without 'data-bs-toggle' fields in buttons for modals */ /
  const [showMapAdditionModal, setShowMapAdditionModal] = useState(false);  //** NOTE: Used for alternate implmntatn without 'data-bs-toggle' fields in buttons for modals */ /
  const [showEditPhotoEntryModal, setShowEditPhotoEntryModal] = useState(false);  //** NOTE: Used for alternate implmntatn without 'data-bs-toggle' fields in buttons for modals */ /
  const [photoBeingEdited, setPhotoBeingEdited] = useState(-1);
  const [rowOfPhotoBeingEdited, setRowOfPhotoBeingEdited] = useState(-1);

  // TODO: Get table data from database
  /* 
  * NOTE: Alternate way to implement modals: 
  *       Use the "set" variables and functions appropriate for each modal and use a 
  *       "style" element to set the visibility of each modal as it is needed / clicked on
  *       as follows:
  *       <div className="modal" style={{display: show<whatever modal it is> ? 
  *                                                 "block" :
  *                                                  "none"}}>...</div>
  *       (note: Could also use the "visibility" trait as follows:
  *         style={{visibility: show<whatever modal it is> ?
  *                               "visible" :
  *                               "hidden"}})
  *
  *       Then would have to appropriately unset the state of the appropriate modal when closing out of
  *       it.
  */

  function createRandomPhotos(numRandomPhotos = 6) {
    const photos = [];
    let currEntryName = "Photo";
    
    for (let i = 1; i < numRandomPhotos; i++) {
      currEntryName += i;
      photos.push({
        "photoId": i,
        "entryName": currEntryName,
        "latitude": (10.0000 * i + Math.exp(i)),
        "longitude": (20.0000 * i * 2 + Math.exp(i/2)),
        "photoDescription": "This is a description"
      });
    }
  
    return photos;
  }

  const handlePopulateTable = () => {
    // Populate with fake data for now.
    const fakePhotos = createRandomPhotos();

    setTableData([...tableData, ...fakePhotos]);
  }

  const handleClearTable = () => {
    setTableData([]);
  }

  function submitManualAddition() { // TODO: Complete function body

  }

  function submitMapAddition() {  // TODO: Complete function body

  }

  function populateEditModal(idOfPhotoBeingEdited) {  // TODO: Complete function body

  }

  function submitEdits(idOfPhotoBeingEdited, rowOfPhotoBeingEdited) { // TODO: Complete function body

  }

  return (
    <div className="main-page">
      <header className="title-bar">
        <div className="welcome-message">Welcome, User</div>
        <div className="app-title">PlaceFolio</div>
        <button className="logout-button">Logout</button>
      </header>
      <main className="main-content">
        <div className="left-section">
          <div className="table-container">
            {/* Table goes here */}
            <table>
              <thead className="table-header">
                <tr>
                  <th>Name</th>
                  <th>Lat</th>
                  <th>Long</th>
                  <th>Edit</th>
                </tr>
                <tr>
                  <td>
                    <button className="btn btn-primary centered" onClick={handlePopulateTable}>
                      TEST: POPULATE TABLE WITH RANDOM DATA
                    </button>
                  </td>
                  <td>
                  <button className="btn btn-primary centered" onClick={handlePopulateTable}>
                      TEST: CLEAR TABLE RANDOM DATA
                    </button>
                  </td>
                </tr>
              </thead>
              <tbody>
                {
                  tableData.map((tableEntry) => {
                      let i = 1;
                      return (
                        <tr key={i}>
                          <td key={tableEntry.photoId} style={{display: "none"}}>{tableEntry.photoId}</td>
                          <td key={tableEntry.entryName}>{tableEntry.entryName}</td>
                          <td key={tableEntry.latitude}>{tableEntry.latitude}</td>
                          <td key={tableEntry.longitude}>{tableEntry.longitude}</td>
                          <td>
                            <button
                              className="btn btn-secondary"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-photo-entry-modal"
                              onClick={() => {
                                setPhotoBeingEdited(tableEntry.photoId); 
                                setRowOfPhotoBeingEdited(i++);
                              }}>Edit</button>
                          </td>
                        </tr>
                      );
                    })
                }
              </tbody>
            </table>
          </div>
          <div className="bottom-container">
            <div className="button-container">
              <button
              className="btn btn-primary" 
              type="button" 
              data-bs-toggle="modal" 
              data-bs-target="#manual-addition-modal">Manual Addition</button>
              <button
              className="btn btn-primary" 
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#map-addition-modal">Map Addition</button>
            </div>
          </div>
        </div>
        <div className="map-section">
          <MapComponent />
        </div>
      </main>

        {/* -- Modal : Manual Entry -- */}
        <div id="manual-addition-modal" className="modal fade" role="form">
        <div className="modal-form">
          {/* -- Modal : Manual Entry : content -- */}
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-bs-dismiss="modal">&times;</button>
              <h4 className="modal-name">Add Photo: Manual Lat & Long Entry</h4>
            </div>
            <div className="modal-body">
            <div className="input-group mb-3">
            <div className="custom-file">
              <input type="file" className="custom-file-input" id="inputImage"></input>
              <label className="custom-file-label" for="inputImage"> Choose file </label>
            </div>
            <div class="input-group-append">
              <span class="input-group-text" id="uploadImage"> Upload </span>
            </div>
          </div>
            <form>
              <div className="form-group">
                <div className="form-row">
                  <label htmlFor="manual-addition-name" className="col-sm-2 col-form-label"> Photo name: </label>
                  <div className="col-sm-10">
                    <input
                    type="text"
                    placeholder="My Photograph's name"
                    className="form-control-plaintext"
                    id="manual-addition-name"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <label htmlFor="manual-addition-latitude" className="col-sm-2 col-form-label"> Latitude: </label>
                  <div className="col-sm-10">
                    <input
                    type="number"
                    placeholder="00.0000"
                    className="form-control"
                    id="manual-addition-latitude"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <label htmlFor="manual-addition-longitude" className="col-sm-2 col-form-label"> Longitude: </label>
                  <div className="col-sm-10">
                    <input
                    type="number"
                    placeholder="00.0000"
                    className="form-control"
                    id="manual-addition-longitude"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <label htmlFor="manual-addition-description" className="col-sm-2 col-form-label"> Description/Comments (optional): </label>
                  <div className="col-sm-10">
                    <input
                    type="text"
                    placeholder="My photograph's description"
                    className="form-control-plaintext"
                    id="manual-addition-description"
                    />
                  </div>
                </div>
              </div>
            </form>
            </div>
            <div className="modal-footer">
              <button 
              type="submit" 
              className="btn btn-primary mb-2"
              onClick={submitManualAddition}> Confirm </button>
            </div>
          </div>
        </div>
      </div>

        {/* -- Modal : Map-Click Entry -- */}
        <div id="map-addition-modal" className="modal fade" role="form">
        <div className="modal-form">
          {/* -- Modal : Map-Click Entry : content -- */}
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-bs-dismiss="modal">&times;</button>
              <h4 className="modal-name">Add Photo: Map-Click Lat & Long Entry</h4>
            </div>
            <div className="modal-body">
            <div className="input-group mb-3">
            <div className="custom-file">
              <input type="file" className="custom-file-input" id="inputImage"></input>
              <label className="custom-file-label" for="inputImage"> Choose file </label>
            </div>
            <div class="input-group-append">
              <span class="input-group-text" id="uploadImage"> Upload </span>
            </div>
          </div>
            <form>
              <div className="form-group">
                <div className="form-row">
                  <label htmlFor="map-addition-name" className="col-sm-2 col-form-label"> Photo name: </label>
                  <div className="col-sm-10">
                    <input
                    type="text"
                    placeholder="My Photograph's name"
                    className="form-control-plaintext"
                    id="map-addition-name"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <label htmlFor="map-addition-description" className="col-sm-2 col-form-label"> Description/Comments (optional): </label>
                  <div className="col-sm-10">
                    <input
                    type="text"
                    placeholder="My photograph's description"
                    className="form-control-plaintext"
                    id="map-addition-description"
                    />
                  </div>
                </div>
              </div>
            </form>
            </div>
            <div className="modal-footer">
              <button 
              type="submit" 
              className="btn btn-primary mb-2"
              onClick={submitMapAddition}> Confirm </button>
            </div>
          </div>
        </div>
      </div>

      {/* -- Modal : Edit Entry -- */}
      <div id="edit-photo-entry-modal" className="modal fade" role="form">
        <div className="modal-form">
          {/* -- Modal : Edit Entry : content -- */}
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-bs-dismiss="modal">&times;</button>
              <h4 className="modal-name">Edit Photo Entry</h4>
            </div>
            <div className="modal-body">
            <div className="input-group mb-3">
            <div className="custom-file">
              <input type="file" className="custom-file-input" id="inputImage"></input>
              <label className="custom-file-label" for="inputImage"> Choose file </label>
            </div>
            <div class="input-group-append">
              <span class="input-group-text" id="uploadImage"> Upload </span>
            </div>
          </div>
            <form>
              <div className="form-group">
                <div className="form-row">
                  <label htmlFor="manual-addition-name" className="col-sm-2 col-form-label"> Photo name: </label>
                  <div className="col-sm-10">
                    <input
                    type="text"
                    placeholder="My Photograph's name"
                    value={'Example Name'}
                    className="form-control-plaintext"
                    id="manual-addition-name"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <label htmlFor="manual-addition-latitude" className="col-sm-2 col-form-label"> Latitude: </label>
                  <div className="col-sm-10">
                    <input
                    type="number"
                    placeholder="00.0000"
                    value={"populateEditModal(photoBeingEdited).latitude"}
                    className="form-control"
                    id="manual-addition-latitude"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <label htmlFor="manual-addition-longitude" className="col-sm-2 col-form-label"> Longitude: </label>
                  <div className="col-sm-10">
                    <input
                    type="number"
                    placeholder="00.0000"
                    value={"populateEditModal(photoBeingEdited).longitude"}
                    className="form-control"
                    id="manual-addition-longitude"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <label htmlFor="manual-addition-description" className="col-sm-2 col-form-label"> Description/Comments (optional): </label>
                  <div className="col-sm-10">
                    <input
                    type="text"
                    placeholder="My photograph's description"
                    value={"populateEditModal(photoBeingEdited).description"}
                    className="form-control-plaintext"
                    id="manual-addition-description"
                    />
                  </div>
                </div>
              </div>
            </form>
            </div>
            <div className="modal-footer">
              <button 
              type="submit" 
              className="btn btn-primary mb-2"
              onClick={() => {
                submitEdits(photoBeingEdited, rowOfPhotoBeingEdited);
                setPhotoBeingEdited(-1);
                setRowOfPhotoBeingEdited(-1);
              }}> Confirm </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;

