import React from "react";
import { archiveNote, unarchiveNote } from "../utils/network-data";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function ArchiveButton({ id }) {
  const navigate = useNavigate();

  const onArchive = async (id) => {
    await archiveNote(id);
    navigate("/");
  };

  const onUnarchived = async (id) => {
    await unarchiveNote(id);
    navigate("/");
  };
  return (
    <>
      {id.archived ? (
        <button
          className="action"
          type="button"
          onClick={() => onUnarchived(id.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <g>
              <rect fill="none" height="24" width="24" x="0" />
            </g>
            <g>
              <g>
                <g>
                  <path d="M20.55,5.22l-1.39-1.68C18.88,3.21,18.47,3,18,3H6C5.53,3,5.12,3.21,4.85,3.55L3.46,5.22C3.17,5.57,3,6.01,3,6.5V19 c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V6.5C21,6.01,20.83,5.57,20.55,5.22z M12,9.5l5.5,5.5H14v2h-4v-2H6.5L12,9.5z M5.12,5 l0.82-1h12l0.93,1H5.12z" />
                </g>
              </g>
            </g>
          </svg>
        </button>
      ) : (
        <button
          className="action"
          type="button"
          onClick={() => onArchive(id.id)}
        >
          <svg
            height="48"
            viewBox="0 0 48 48"
            width="48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M41.09 10.45l-2.77-3.36c-.56-.66-1.39-1.09-2.32-1.09h-24c-.93 0-1.76.43-2.31 1.09l-2.77 3.36c-.58.7-.92 1.58-.92 2.55v25c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4v-25c0-.97-.34-1.85-.91-2.55zm-17.09 24.55l-11-11h7v-4h8v4h7l-11 11zm-13.75-25l1.63-2h24l1.87 2h-27.5z" />
            <path d="M0 0h48v48h-48z" fill="none" />
          </svg>
        </button>
      )}
    </>
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.object.isRequired,
};

export default ArchiveButton;
