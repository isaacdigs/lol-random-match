import React, { Component } from 'react'

export class Spell extends Component {
  
  render() {
    let spells = [
      "Barrier", "Boost", "Dot", "Exhaust", "Flash", "Haste", "Heal", "Mana", "Snowball", "Teleport"
    ];
    let rng1n1 = Math.floor(Math.random() * 10);
    let rng1n2 = Math.floor(Math.random() * 10);
    if (rng1n2 === rng1n1) {
      rng1n2 = Math.abs(rng1n1 + (Math.floor(Math.random()*9))-10);
    }
    let rng2n1 = Math.floor(Math.random() * 10);
    let rng2n2 = Math.floor(Math.random() * 10);
    if (rng2n2 === rng2n1) {
      rng2n2 = Math.abs(rng2n1 + (Math.floor(Math.random()*9))-10);
    }

    return (
      <div>
        <img src={require(`./images/summoner-spells/Summoner${spells[rng1n1]}.png`)} alt=""/>
        <img src={require(`./images/summoner-spells/Summoner${spells[rng1n2]}.png`)} alt=""/>
        vs
        <img src={require(`./images/summoner-spells/Summoner${spells[rng2n1]}.png`)} alt=""/>
        <img src={require(`./images/summoner-spells/Summoner${spells[rng2n2]}.png`)} alt=""/>
      </div>
    )
  }
}

export default Spell
