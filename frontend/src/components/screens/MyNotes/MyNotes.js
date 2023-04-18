import React, { useEffect, useState } from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import MainScreen from "../../MainScreen";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { deleteNoteAction } from "../../../actions/notesActions";

// import axios from "axios";
import Loading from "../../Loading";
import ErrorMessage from "../../ErrorMessage";
import { deleteNoteAction, listNotes } from "../../../actions/notesActions";
import { useNavigate } from "react-router-dom";
import { GlobalValue } from "../../../UseContedxt";

const Mynotes = () => {
  const { search } = GlobalValue();
  console.log(search);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const noteList = useSelector((state) => state.noteList);
  const { loading, notes, error } = noteList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const createNote = useSelector((state) => state.createNote);
  const { success: successCreate } = createNote;

  const deleteNote = useSelector((state) => state.deleteNote);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = deleteNote;

  const updateNote = useSelector((state) => state.updateNote);
  const { success: successUpdate } = updateNote;

  useEffect(() => {
    dispatch(listNotes());
    if (!userInfo) {
      navigate("/");
    }
  }, [
    dispatch,
    navigate,
    userInfo,
    successCreate,
    successUpdate,
    successDelete,
  ]);
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure ?")) {
      dispatch(deleteNoteAction(id));
      window.location.reload();
    }
    // navigate("/mynotes");
  };

  console.log(search);
  return (
    <>
      <MainScreen title={`welcome ${userInfo.name}`}>
        <Link to="createnote">
          <Button className="mx-3 btn">Create New Note</Button>
        </Link>
        {errorDelete && (
          <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
        )}
        {loadingDelete && <Loading />}
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}
        {/* {console.log(error)} */}
        {/* {console.log(notes)} */}
        {notes &&
          notes
            .filter((FilteredNotes) =>
              FilteredNotes.title.toLowerCase().includes(search.toLowerCase())
            )
            .reverse()
            .map((note) => (
              <Accordion defaultActiveKey={"1"} key={note._id}>
                <Accordion.Item eventKey="0">
                  <Card style={{ margin: 10 }}>
                    <Card.Header
                      className="card-header"
                      style={{
                        display: "flex",
                        border: "none",
                      }}
                    >
                      <span
                        style={{
                          color: "black",
                          textDecoration: "none",
                          flex: 1,
                          cursor: "pointer",
                          alignSelf: "center",
                          fontSize: 18,
                        }}
                      >
                        <Accordion.Header
                          as={Card.Text}
                          variant="link"
                          eventKey="0"
                        >
                          {note.title}
                        </Accordion.Header>
                      </span>

                      <div>
                        <Button href={`/note/${note._id}`}>Edit</Button>
                        <Button
                          variant="danger"
                          className="mx-2"
                          onClick={() => deleteHandler(note._id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </Card.Header>
                    <Accordion.Body>
                      <Card.Body>
                        <h4>
                          <Badge bg="primary">category - {note.category}</Badge>
                        </h4>
                        <blockquote className="blockquote mb-0">
                          <p>{note.content}</p>
                          <footer className="blockquote-footer">
                            created on{" "}
                            <cite title="Source title">
                              {note.createdAt.substring(0, 10)}
                            </cite>
                          </footer>
                        </blockquote>
                      </Card.Body>
                    </Accordion.Body>
                  </Card>
                </Accordion.Item>
              </Accordion>
            ))}
      </MainScreen>
    </>
  );
};

export default Mynotes;
