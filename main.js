const rulesBtn = document.querySelector('#rules-btn')


const rulesBtnclose = document.querySelector('#rules-btn-close')

const firstEl = document.querySelector('#first')
const secondEl = document.querySelector('#second')
const thirdEl = document.querySelector('#third')
const fourthEl = document.querySelector('#fourth')
const secFirst = document.querySelector('#sec-first')
const secSecond = document.querySelector('#sec-second')
const secThird = document.querySelector('#sec-third')
const secFourth = document.querySelector('#sec-fourth')
const thirdFirst = document.querySelector('#third-first')
const thirdsecond = document.querySelector('#third-second')
const thirdThird = document.querySelector('#third-third')
const thirdFourth = document.querySelector('#third-fourth')
const fourFirst = document.querySelector('#four-first')
const foursecond = document.querySelector('#four-second')
const fourThird = document.querySelector('#four-third')
const fourFourth = document.querySelector('#four-fourth')
const fivFirst = document.querySelector('#fiv-first')
const fivsecond = document.querySelector('#fiv-second')
const fivThird = document.querySelector('#fiv-third')
const fivFourth = document.querySelector('#fiv-fourth')

const closeEl =  document.querySelector('#close')

const rulesEl = document.querySelector('.rules')

const thankYou = document.querySelector('#thankyou')

const endSection = document.querySelector('#end-section')


console.log(thankYou);

thankYou.addEventListener('click',()=>{

    endSection.classList.toggle('thank')


})

rulesBtn.addEventListener('click',()=>{


        rulesEl.className = 'view'

        rulesEl.hidden = !rulesEl.hidden
    }
)

closeEl.addEventListener('click',()=>{
        
        rulesEl.classList.toggle('closetable')
    }
)


document.addEventListener('click',(event)=>{

    event.preventDefault()

    let id = event.target.dataset.toggleId

    if(!id) return

    let showEl = document.querySelector('#answer-id')

    showEl.hidden = !showEl.hidden

})

// First table 

firstEl.addEventListener('click',(e)=>{

    e.preventDefault()

    if (firstEl == firstEl ) {

    firstEl.className = 'true'

    const secondformEl = document.querySelector('#second-table')

    secondformEl.hidden = !secondformEl.hidden    
      }
    
    return
})


secondEl.addEventListener('click',()=>{

    if (secondEl == secondEl) {

    secondEl.className = 'false'

}
})

thirdEl.addEventListener('click',()=>{

    if (thirdEl == thirdEl) {

    thirdEl.className = 'false'

}
})

fourthEl.addEventListener('click',()=>{

    if (fourthEl == fourthEl) {

    fourthEl.className = 'false'

}
})

// Second table 

secSecond.addEventListener('click',()=>{

    if (secSecond == secSecond ) {

    secSecond.className = 'true'

    const thirdformEl = document.querySelector('#third-table')

    thirdformEl.hidden = !thirdformEl.hidden    
      }
    
    return
})


secFirst.addEventListener('click',()=>{

    if (secFirst == secFirst) {

    secFirst.className = 'false'

}
})

secThird.addEventListener('click',()=>{

    if (secThird == secThird) {

    secThird.className = 'false'

}
})

secFourth.addEventListener('click',()=>{

    if (secFourth == secFourth) {

    secFourth.className = 'false'

}
})



// ------------------------------------------------------------Third table 

thirdFourth.addEventListener('click',()=>{

    if (thirdFourth == thirdFourth ) {

    thirdFourth.className = 'true'

    const fourthTable = document.querySelector('#fourth-table')

    fourthTable.hidden = !fourthTable.hidden    
      }
    
    return
})


thirdFirst.addEventListener('click',()=>{

    if (thirdFirst == thirdFirst) {

    thirdFirst.className = 'false'

}
})

thirdsecond.addEventListener('click',()=>{

    if (thirdsecond == thirdsecond) {

    thirdsecond.className = 'false'

}
})

thirdThird.addEventListener('click',()=>{

    if (thirdThird == thirdThird) {

    thirdThird.className = 'false'

}
})
// ------------------------------------------------------------fourth table 

fourThird.addEventListener('click',()=>{

    if (fourThird == fourThird ) {

    fourThird.className = 'true'

    const fivthTable = document.querySelector('#fivth-table')

    fivthTable.hidden = !fivthTable.hidden    
      }
    
    return
})


fourFirst.addEventListener('click',()=>{

    if (fourFirst == fourFirst) {

    fourFirst.className = 'false'

}
})

foursecond.addEventListener('click',()=>{

    if (foursecond == foursecond) {

    foursecond.className = 'false'

}
})

fourFourth.addEventListener('click',()=>{

    if (fourFourth == fourFourth) {

    fourFourth.className = 'false'

}
})
// ------------------------------------------------------------fivth table 

fivFirst.addEventListener('click',()=>{

    if (fivFirst == fivFirst ) {

    fivFirst.className = 'true'


        endSection.hidden = !endSection.hidden

        endSection.className = 'endview'



}
}
)


fivsecond.addEventListener('click',()=>{

    if (fivsecond == fivsecond) {

    fivsecond.className = 'false'

}
})

fivThird.addEventListener('click',()=>{

    if (fivThird == fivThird) {

    fivThird.className = 'false'

}
})

fivFourth.addEventListener('click',()=>{

    if (fivFourth == fivFourth) {

    fivFourth.className = 'false'

}
})
