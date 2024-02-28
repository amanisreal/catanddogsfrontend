import React, {useState} from "react";
import NoteContex from "./noteContext"

const NoteState = (props) => {
    const url = `https://localhost:5000`

    const [authToken, setAuthToken] = useState('');

    const catData = async() => {
        const response = await fetch
    }
}