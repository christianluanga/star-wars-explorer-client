import React from "react"
import { Router } from "@reach/router"
import CharacterList from "./characters/list/CharacterList"
import CharacterDetails from "./characters/details/CharacterDetails"


const _Router = () => {
    return (
        <Router>
            <CharacterList path="/"/>
            <CharacterDetails path="/character/:name" />
        </Router>
    )
}

export default _Router
