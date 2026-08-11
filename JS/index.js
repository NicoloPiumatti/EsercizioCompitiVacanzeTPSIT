"use strict"

// creazione div container
let container = document.createElement("div");
container.classList.add("container", "mt-3");
this.document.body.append(container);

// creazione array
let nave1 = ["5-2"];
let nave2 = ["4-8", "5-8"];
let nave3 = ["8-5", "8-6", "8-7"];
let nave4 = ["4-1", "5-1", "6-1", "7-1"];

// creazione variabili
let cntN1 = 0;
let cntN2 = 0;
let cntN3 = 0;
let cntN4 = 0;

for(let i = 0; i < 10; i++)
{
    let row = document.createElement("div");
    row.classList.add("row");
    container.append(row);
    for(let j = 0; j < 10; j++)
    {
        let col = document.createElement("div");
        col.classList.add("col", "p-0");
        row.append(col);
        let cella = document.createElement("div");
        cella.setAttribute("id", "cella_" + i + "_" + j);
        cella.classList.add("h-100", "w-100", "border", "border-warning", "border-3", "p-3", "m-2");
        cella.addEventListener("click", function(){
            let coordinata = i + "-" + j;
            if(nave1.includes(coordinata))
            {
                document.getElementById("cella_" + i + "_" + j).style.backgroundColor = "red";
                console.log("colpito");
                cntN1++;
                if(cntN1 === 1)
                {
                    alert("Nave 1 affondata!");
                }
                else
                {
                    console.log("Parti colpite della nave 1: " + cntN1);
                }
            }
            else if(nave2.includes(coordinata))
            {
                document.getElementById("cella_" + i + "_" + j).style.backgroundColor = "red";
                console.log("colpito");
                cntN2++;
                if(cntN2 === 2)
                {
                    alert("Nave 2 affondata!");
                }
                else
                {
                    console.log("Parti colpite della nave 2: " + cntN2);
                }
            }
            else if(nave3.includes(coordinata))
            {
                document.getElementById("cella_" + i + "_" + j).style.backgroundColor = "red";
                console.log("colpito");
                cntN3++;

                if(cntN3 === 3)
                {
                    alert("Nave 3 affondata!");
                }
                else
                {
                    console.log("Parti colpite della nave 3: " + cntN3);
                }
            }
            else if(nave4.includes(coordinata))
            {
                document.getElementById("cella_" + i + "_" + j).style.backgroundColor = "red";
                console.log("colpito");
                cntN4++;
                if(cntN4 === 4)
                {
                    alert("Nave 4 affondata!");
                }
                else
                {
                    console.log("Parti colpite della nave 4: " + cntN4);
                }
            }
            else
            {
                document.getElementById("cella_" + i + "_" + j).style.backgroundColor = "blue";
                console.log("acqua");
            }
            document.getElementById("cella_" + i + "_" + j).style.pointerEvents = "none";
        });
        col.append(cella);
    }
}