import React from "react";
import { UnitSelector } from "../unitSelector/unitSelector";
import './attack.scss'

export class Attacks extends React.Component<{},{}>{

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {}
  render() {
    return(
      <form className="attacks" onSubmit={(event)=>this.handleSubmit(event)}>
        <h1>Támadás</h1>
        <p>1. Jelöld ki, kit szeretnél megtámadni</p>
        {/* component to find enemy */}
        <p>2. Állítsd be, kiket küldesz harcba</p>
        {/* 3 stateless components */}
        <UnitSelector unitNum={6}/>
      </form>
    )
  }

}