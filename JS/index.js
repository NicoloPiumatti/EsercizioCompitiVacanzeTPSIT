"use strict"

let container = document.createElement("div");
container.classList.add("container", "mt-3");
this.document.body.append(container);

for(let i = 0; i < 8; i++)
{
    let row = document.createElement("div");
    row.classList.add("row");
    container.append(row);
    for(let j = 0; j < 8; j++)
    {
        let col = document.createElement("div");
        col.classList.add("col", "p-0");
        row.append(col);
        let cella = document.createElement("div");
        cella.setAttribute("id", "cella_" + i + "_" + j);
        cella.classList.add("h-100", "w-100", "border", "border-dark", "border-2", "p-3", "m-3");
        col.append(cella);
    }
}