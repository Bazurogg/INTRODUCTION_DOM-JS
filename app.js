

function shuffleChildren(parent){

    let i = board.children.length, k , temp
    while(--i >= 0){

        k = Math.floor(Math.random()*(i+1))
        temp = board.children[k]
        board.children[k] = board.children[i] 
        board.appendChild(temp)   
                 
    }

}

function showReaction(type, clickedBox){

    clickedBox.classList.add(type)
    if(type !== "Sucess"){

        setTimeout(function(){
            clickedBox.classList.remove(type)
        }, 800)

    }

}

const box = document.createElement("div")
//"creatElement" méthode qui va instancier un nouvel obbjet HTMLElement, représenté par la balise placée en argument "()" de cette méthode.

box.classList.add("box")

const board = document.querySelector("#board")

let nb = 1 //On déclare la Variable qui correspond au nb de la boîte attendue qui s'incrémentera lors d'un clic valide via ligne 47.
let nbBox = parseInt(prompt("Entrez un nombre"))

for (let i = 1; i <= nbBox; i++){
    let newbox = box.cloneNode()
    newbox.innerText = i

    board.appendChild(newbox)
    // "appendChild()" méthode qui place un élément("box") du DOM à la FIN du contenu de l'élément visé (#board). On utilisera "prepend()" pour l'ajouter au DéBUT.

    newbox.addEventListener("click", function(){
        //"addEventListener" méthode qui associe un évènement à tout élément du DOM.

        console.log("Boite n°"+ i +", click !")
        // newbox.classList.add("box-valid")

        if (i == nb){ // On check si la condition est validée. 

            newbox.classList.add("box-valid") // Si oui alors on ajoute la class CSS "box-valid" à l'élément.

            if (nb == board.children.length){ // Si nb est égal au nombres de boîtes du jeu -> victoire du joueur.
                board.querySelectorAll(".box").forEach(function(box){
                    showReaction("sucess", box)
                })   
            }

            nb ++// <--- Incrémentation de la variable "nb" lors de la validation des conditions lors du clic.
            shuffleChildren(board)
        }

        else if (i > nb){ // Si le numéro de la boîte est supérieur à "nb" le  joueur a cliqué sur une boîte trop élevée -> le jeu recommence.
            showReaction("error", newbox)
            nb = 1
            board.querySelectorAll(".box-valid").forEach(function(validBox){ // Sélections de tout les éléments du "board" à l'état "box-valid" sur lesquels la méthode forEach va s'appliquer chaque éléments est représentés par l'argument "validBox".
                validBox.classList.remove("box-valid") // Fonction callback à  l'intérieur de forEach() qui va supprimer la classe CSS des attributs des éléments "validBox"
            })
            shuffleChildren(board)
        }

        else { // Si le joueur clique sur une boîte déjà validée, un message s'affiche alors mais le jeu ne redémarre pas.
            showReaction("notice", newbox)
        }
    })
}

shuffleChildren(board)

