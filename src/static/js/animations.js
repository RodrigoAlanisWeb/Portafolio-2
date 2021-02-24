if (screen.width > 778) {
    anime({
        targets: '#card_1',
        translateX: -500
    });
    
    anime({
        targets: '#card_3',
        translateX: 500
    });
    
    anime({
        targets: '#card_2',
        translateY: 500,
        endDelay: 0
    })
} else if (screen.width > 575 && window.innerWidth < 778) {
    console.log('si');
    anime({
        targets: '#card_1',
        translateX: -500
    });
    
    anime({
        targets: '#card_2',
        translateX: 500
    });
    
    anime({
        targets: '#card_3',
        translateY: 500,
        endDelay: 0
    })
}

if (screen.width <= 575) {
    anime({
        targets: '#card_1',
        translateX: -500
    });
    
    anime({
        targets: '#card_2',
        translateX: 500
    });
    
    anime({
        targets: '#card_3',
        translateX: -500,
    })
}


window.addEventListener('scroll',() => {
    let objet = document.getElementById('card_1')
    let position = objet.getBoundingClientRect().top
    let windowHeight = screen.height/1.5
    if (screen.width > 575 && screen.width < 778) {
        windowHeight = screen.height/0.8
    }

    if (position < windowHeight) {
        console.log(screen.width);
        if (screen.width > 778) {
            anime({
                targets: '#card_1',
                translateX: 0,
                endDelay: 0,
            });
            anime({
                targets: '#card_3',
                translateX: 0,
                endDelay: 0
            });
            anime({
                targets: '#card_2',
                translateY: 0,
                endDelay: 0
            })
        } else if (screen.width > 575 && screen.width < 778) {
            console.log('si');
            anime({
                targets: '#card_1',
                translateX: 0,
                endDelay: 0,
            });
            anime({
                targets: '#card_2',
                translateX: 0,
                endDelay: 0
            });
            anime({
                targets: '#card_3',
                translateY: 0,
                endDelay: 0
            })
            console.log('animasdas');
        }
    }
})

if (screen.width <= 575)
window.addEventListener('scroll', () => {
    let objet_1 = document.getElementById('card_1')
    let objet_2 = document.getElementById('card_2')
    let objet_3 = document.getElementById('card_3')
    let position_1 = objet_1.getBoundingClientRect().top
    let position_2 = objet_2.getBoundingClientRect().top
    let position_3 = objet_3.getBoundingClientRect().top
    let windowHeight = screen.height/.8
    if (position_1 < windowHeight) {
        anime({
            targets: '#card_1',
            translateX: 0,
            endDelay: 0,
        });
    }
    if (position_2 < windowHeight) {
        anime({
            targets: '#card_2',
            translateX: 0,
            endDelay: 0,
        });
    }
    if (position_3 < windowHeight) {
        anime({
            targets: '#card_3',
            translateX: 0,
            endDelay: 0,
        });
    }

})