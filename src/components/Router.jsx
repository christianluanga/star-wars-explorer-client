import React from "react"
import { Router } from "@reach/router"

import CharacterList from "./characters/CharacterList"
import CharacterDetails from "./characters/CharacterDetails"

const _Router = () => {
    return (
        <Router>
            <CharacterList path="/"/>
            <CharacterDetails path="/character/:name" />
        </Router>
    )
}

export default _Router
