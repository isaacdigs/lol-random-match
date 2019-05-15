import React, { Component } from 'react'

export class Rune extends Component {

  render() {
    let mainRune = ["Domination"]
    //"Precision", "Inspiration", "Sorcery", "Resolve"
    let DominationMain = ["Electrocute", "HailOfBlades", "DarkHarvest", "Predator"];
    let DominationSub1 = ["CheapShot","TasteOfBlood","SuddenImpact" ];
    let DominationSub2 = ["GhostPoro", "EyeballCollection","ZombieWard"];
    let DominationSub3 = ["IngeniousHunter", "RavenousHunter","UltimateHunter"];

    function RunePick(runes) {
      return runes[Math.floor(Math.random() * runes.length)]
    }
    function SubPick(subrunes) {
      return RunePick(eval(subrunes))
    }
    
    //Pick Main Mastery
    let mainPick = RunePick(mainRune);

    //Pick Main Rune from that Mastery
    let mainName = RunePick(eval(`${mainPick}Main`));

    //let nonMainPick = RunePick(mainRune.filter(function(value,index,arr) {return value !== mainPick}))
    //Pick Sub-runes from that mastery
    let subNames = [SubPick(`${mainPick}Sub1`), SubPick(`${mainPick}Sub2`),SubPick(`${mainPick}Sub3`)];
    console.log(mainPick, mainName, subNames)
  
    return (
      <div>
        <div className="player1-runes">
          <div className="main-rune"> <img src= {require(`./images/runes/Styles/${mainPick}/${mainName}/${mainName}.png`)} alt=""/> </div>
          <div className="sub-rune1"> <img src= {require(`./images/runes/Styles/${mainPick}/${subNames[0]}/${subNames[0]}.png`)} alt=""/></div>
          <div className="sub-rune2"> <img src= {require(`./images/runes/Styles/${mainPick}/${subNames[1]}/${subNames[1]}.png`)} alt=""/></div>
          <div className="sub-rune3"> <img src= {require(`./images/runes/Styles/${mainPick}/${subNames[2]}/${subNames[2]}.png`)} alt=""/></div>
          <div className="secondary-rune1"></div>
          <div className="secondary-rune2"></div>
        </div>
        <div className="player2-runes">
          <div className="main-rune"></div>
          <div className="sub-rune1"></div>
          <div className="sub-rune2"></div>
          <div className="sub-rune3"></div>
          <div className="secondary-rune1"></div>
          <div className="secondary-rune2"></div>
        </div>
      </div>
    )
  }
}

export default Rune
